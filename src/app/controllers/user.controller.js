const db = require("../models");
const bcrypt = require('bcryptjs');
const { faUserSecret } = require("@fortawesome/free-solid-svg-icons");
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
    password: bcrypt.hashSync(req.body.password, salt),
    role: req.body.role
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

  User.findOne({ attributes: ["id","password","role"], where: condition, raw: true })
    .then(data => {
      if(bcrypt.compareSync(password, data.password)){
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user."
      });
    });
};

exports.findAll = (req, res) => {

  User.findAll({
    attributes: { exclude: ['password'] },
    where: {
      id: {
        [Op.ne]: 1,
      }
    },
    raw: true
  })
  .then(data => {
    k=0;
    const users= data.map(element => {
        return {
            'id': k+= 1,
            'userId': element.id,
            'username': element.username,
            'email': element.email
        };
    });
    res.send(users);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving users."
    });
  });
};

exports.deleteUser = (req, res) => {

  const id = req.query.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};
