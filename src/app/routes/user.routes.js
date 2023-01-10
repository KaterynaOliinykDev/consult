const express = require('express');
const userRoute = express.Router();
const user = require("../controllers/user.controller.js");

userRoute.post("/", user.create);

userRoute.get("/", user.findRegisteredUser);

module.exports = userRoute;
