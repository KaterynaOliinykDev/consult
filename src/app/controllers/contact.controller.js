const db = require("../models");
const Contact = db.contact;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
   Contact.create(req)
    .then(data => {
      console.log('Contact save in database.')
    })
    .catch(err => {
      console.log(err);
    });
};
