const db = require("../models");
const Contact = db.contact;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  if (!req.body.full_name || !req.body.email || !req.body.subject || !req.body.message) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const contact = {
    full_name: req.body.full_name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
  };

   Contact.create(contact)
   .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Contact."
    });
  });
};
