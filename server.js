const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require("./src/app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

app.use(cors())

app.use(express.static(path.join(__dirname, 'dist/consult')))

const contactRouter = require('./src/app/routes/contact.routes');
const userRouter = require('./src/app/routes/user.routes');
const emailRouter = require('./src/app/routes/email.routes');

app.use('/api',contactRouter, userRouter, emailRouter);

var port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port ' + port)
})

app.use(function (err, req, res, next) {
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
