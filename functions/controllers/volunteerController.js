const Volunteer = require("../models/volunteerModel");
const { nextTick } = require("process");


// GET method to retrieve all volunteers
exports.getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET method to retrieve a single volunteer by ID
exports.getVolunteerById = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id).select('-id');
    if (volunteer) {
      res.status(200).json(volunteer);
    } else {
      res.status(404).json({ message: "Volunteer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST method to create a new volunteer
exports.createVolunteer = async (req, res) => {
  const checkVolunteer = await Volunteer.findOne({ email: req.body.email });

  if (checkVolunteer) {
    // If a volunteer with the given email already exists, return an error
    return res
      .status(400)
      .json({ message: "Volunteer with this email already exists" });
  }
  const volunteer = new Volunteer(req.body);

  try {
    const newVolunteer = await volunteer.save();
    res.status(201).json(newVolunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT method to update an existing volunteer by ID
exports.updateVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).json({ message: "Volunteer not found" });
    }

    volunteer.fullName = req.body.fullName;
    volunteer.email = req.body.email;
    volunteer.phoneNumber = req.body.phoneNumber;
    volunteer.academicInstitution = req.body.academicInstitution;
    volunteer.whichProject = req.body.whichProject;
    volunteer.howYouHearAboutUs = req.body.howYouHearAboutUs;
    volunteer.registrationDate = req.body.registrationDate;
    volunteer.status = req.body.status;

    const updatedVolunteer = await volunteer.save();
    res.status(200).json(updatedVolunteer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE method to remove a volunteer by ID
exports.deleteVolunteer = async (req, res) => {
  try {
    const result = await Volunteer.findByIdAndDelete(req.params.id);
    if (result) {
      res.status(200).json({ message: "Volunteer deleted successfully" });
    } else {
      res.status(404).json({ message: "Volunteer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
