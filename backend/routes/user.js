const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const auth = require("../middleware/auth")

router.get("",auth, userController.getUser);
//router.get("/validarAdmin",auth, userController.getUser);

module.exports = router;