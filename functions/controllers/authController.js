const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
require("dotenv").config();

//sign JWT token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
//sign JWT token and send it to client as cookie
// const createSendToken = (user, statusCode, res) => {
//     const token = signToken(user._id);
//     const cookieOptions = {
//         expires: new Date(Date.now() + (process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000)),
//         httpOnly: true
//     }
//     //  cookieOptions.secure = true;
//     res.cookie('jwt',token, cookieOptions);

//     res.status(statusCode).json({
//         status: 'success',
//         token,
//         data: {
//             user
//         }
//     });
// };
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  console.log("Generated Token:", token);
  res.status(statusCode).json({
    status: "success",
    token,
  });
};

//signup new user and response JWT token signed for it as cookie
exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
  });
  createSendToken(newUser, 201, res);
});

// exports.signupByAdmin = async (req, res, next) => {
//     try {
//         let pwd = passwordsUtils.generateRandomPassword();
//         const newUser = await User.create({
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             password: pwd,
//             passwordConfirm: pwd,
//             role: req.body.role,
//             location: req.body.location,
//             phoneNumber: req.body.phoneNumber,
//             gender: req.body.gender,
//             positionUntilNow: req.body.positionUntilNow,
//             targetPosition: req.body.targetPosition,
//             yearExperience: req.body.yearExperience,
//             linkdin: req.body.linkdin
//         });

//         let subject = "Welcome to Kibbutz-IL - Your Account Details";
//         let name = `${req.body.firstName} ${req.body.lastName}`;
//         let body = `
//         Dear ${name},

//         Welcome to Kibbutz-IL!

//         Your account is ready:

//         Email: ${req.body.email}
//         Password: ${pwd}

//         Keep your password secure. Log in now.

//         For help, contact us at https://kibbutzil-homepage.web.app/.

//         Thanks for joining us!

//         Best regards,
//         The Kibbutz-IL Team`

//         emailSender.sendEmail(req.body.email, subject, body);

//         res.status(201).json({
//             status: 'success',
//             data: {
//                 newUser
//             }
//         });
//     } catch (err) {
//         res.status(400).json({
//             status: 'error',
//             message: 'An error occurred during user creation. Please try again later.'
//         });
//     }
// };

//user login
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }
  createSendToken(user, 201, res);
});

//check if admin is logged in for security in admin page
exports.checkLoginStatus = (req, res, next) => {
  if (!req.user) {
    return next(new AppError("Please log in again", 401));
  } else {
    res.status(201).json({
      status: "success",
      message: "logged in",
    });
  }
};

//JWT verification for routes
exports.protect = catchAsync(async (req, res, next) => {
  let token;
  //check if a JWT token sent
  if (req.headers.cookie && req.headers.cookie.startsWith("jwt=")) {
    token = req.headers.cookie.substring(4);
  } else if (
    req.header.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("please login to get access", 401));
  }
  //verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  if (!decoded) {
    return next(new AppError("JWT error", 401));
  }
  //check if user still exist
  const freshUser = await User.findById(decoded.id);
  if (!freshUser) {
    return next(new AppError("user no longer exist", 401));
  }
  // check if user changed password
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("user recently changed password, please log in again", 401)
    );
  }

  req.user = freshUser;
  next();
});

//resricts routes to admin user only
exports.resrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError("no premission", 403));
    }
    next();
  };
};

//password reset route

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // get user based on posted email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("No user with email address found", 404));
  }
  // generate random reset token

  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  //send it to users email
  const resetURL = `${req.protocol}://localhost:3000/users/resetPassword/${resetToken}`;

  const message = `Your reset password URL is ${resetURL}. \nif you didn't forgot your password please ignore that Email`;

  try {
    await sendEmail({
      toMail: user.email,
      subject: "Password reset token (valid for 10 min)",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Token sent to email",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError("There was an error sending email. please try again", 500)
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  //get user based on token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await user.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  //if token has not expired, and there is a user, set new password
  if (!user) {
    return next(new AppError("token is invalid or expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();
  //update ChangedPasswordAt property for the user

  //log the user in with JWT
  createSendToken(user, 201, res);
});

exports.updatePassword = (req, res, next) => {};
