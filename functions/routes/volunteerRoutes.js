const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

// Route to add a new volunteer
router.post('/', volunteerController.createVolunteer);

// Route to edit a existing volunteer
router.put('/:id', volunteerController.updateVolunteer);

// Route to remove a volunteer
router.delete('/:id', volunteerController.deleteVolunteer);

// Route to get all volunteers
router.get('/' , volunteerController.getAllVolunteers);

// Route to get a volunteer by ID
router.get('/:id' , volunteerController.getVolunteerById);

module.exports = router;