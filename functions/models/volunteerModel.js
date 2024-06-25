const mongoose = require('mongoose');
const validator = require('validator');
const { string } = require('yup');

const volunteerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Not a valid Email address']
    },
    phoneNumber: {
        type: String,
        required: [true, 'No phone number'],
        validate: {
            validator: function(v) {
              return /^0\d{8,9}$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
          }
    },
    academicInstitution: {
        type: String
    },
    whichProject: {
        type: String
    },
    howYouHearAboutUs: {
        type: String
    },
    status: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;