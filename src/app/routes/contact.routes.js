const express = require('express');
const contactRouter = express.Router();
const contact = require("../controllers/contact.controller.js");

contactRouter.post("/add-contact", contact.create);

module.exports = contactRouter;
