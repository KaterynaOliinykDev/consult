const express = require('express');
const contactRoute = express.Router();
const contact = require("../controllers/contact.controller.js");

contactRoute.post("/add-contact", contact.create);

module.exports = contactRoute;
