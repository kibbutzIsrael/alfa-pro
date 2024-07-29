const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.mw");
const authController = require("../controllers/userController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", auth, authController.getUserDetails);

module.exports = router;
