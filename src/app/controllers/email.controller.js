var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

exports.sendEmail = (req, res) => {

  if (!req.body.from || !req.body.to || !req.body.subject || !req.body.html) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kateryna.oliinyk.dev@gmail.com',
      pass: 'uwdhtmkonvpzkjlu'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  var mailOptions = {
    from: req.body.from,
    to: req.body.to,
    subject: req.body.subject,
    html: req.body.html
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      res.sendStatus(200);
    }
  });
}
