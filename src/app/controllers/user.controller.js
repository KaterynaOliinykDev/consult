const db = require("../models");
const bcrypt = require('bcryptjs');
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  var salt = bcrypt.genSaltSync(10);

  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  };

  const user = {
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt)
  };

   User.create(user)
   .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the User."
    });
  });
};

 exports.findRegisteredUser = (req, res) => {
  const { email, password } = req.query;

  var condition = { email: { [Op.like]: `%${email}%`} };

  User.findOne({ attributes: ["id","password"], where: condition, raw: true })
    .then(data => {
      if(bcrypt.compareSync(password, data.password)){
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
  };
