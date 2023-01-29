const express = require('express');
const userRouter = express.Router();
const user = require("../controllers/user.controller.js");

userRouter.post("/", user.create);

userRouter.get("/user", user.findRegisteredUser);

userRouter.get("/users", user.findAll);

userRouter.delete("/delete", user.deleteUser);

module.exports = userRouter;
