const express = require('express');
const userRouter = express.Router();
const user = require("../controllers/user.controller.js");

userRouter.post("/", user.create);

userRouter.get("/", user.findRegisteredUser);

module.exports = userRouter;
