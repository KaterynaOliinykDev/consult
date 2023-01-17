var express=require('express');
const emailRouter = express.Router();
const email = require("../controllers/email.controller.js");

emailRouter.post("/email", email.sendEmail);

module.exports = emailRouter;
