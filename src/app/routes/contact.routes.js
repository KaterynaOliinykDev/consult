const express = require('express');
const contactRoute = express.Router();
const app = express();
const contact = require("../controllers/contact.controller.js");


contactRoute.post('/add-contact', function (req, res, next) {
  contact.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

module.exports = contactRoute;
