module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define("contact", {
    full_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    subject: {
      type: Sequelize.STRING
    },
    message: {
      type: Sequelize.STRING
    },
  },
    { timestamps: false }
  );

  return Contact;
};
