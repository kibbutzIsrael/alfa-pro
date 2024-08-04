const express = require("express");
const router = express.Router();
const volunteerController = require("../controllers/volunteerController");
const authController = require("../controllers/authController");

// Route to add a new volunteer
router.post("/", volunteerController.createVolunteer);

// Route to edit a existing volunteer
router.put("/:id", authController.protect, volunteerController.updateVolunteer);

// Route to remove a volunteer
router.delete(
  "/:id",
  authController.protect,
  volunteerController.deleteVolunteer
);

// Route to get all volunteers
router.get("/", authController.protect, volunteerController.getAllVolunteers);

// Route to get a volunteer by ID
router.get(
  "/:id",
  authController.protect,
  volunteerController.getVolunteerById
);

module.exports = router;
