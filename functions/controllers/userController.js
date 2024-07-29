const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  try {
    const { fullName, email, role, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).send("User already registered.");

    const hashedPassword = await bcrypt.hash(password, 12);

    user = new User({
      fullName,
      email,
      role,
      password: hashedPassword,
    });

    await user.save();
    res.send("User registered successfully.");
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).send("An error occurred during registration.");
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.status(400).send("Invalid email or password.");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).send("Invalid email or password.");

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      "jwtPrivateKey",
      { expiresIn: "1h" }
    );
    res.send({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("An error occurred during login.");
  }
};

exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).send("An error occurred while fetching user details.");
  }
};
