const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/auth.controller')



authRouter.post("/register", authController.registerUser)
authRouter.post("/login", authController.logInUser)
authRouter.get("/logout", authController.logOutUser)

module.exports= authRouter;



