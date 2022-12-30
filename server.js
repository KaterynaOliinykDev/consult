const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

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

const contactRoute = require('./src/app/routes/contact.routes');

app.use('/api',contactRoute)

var port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Listening on port ' + port)
})

app.use(function (err, req, res, next) {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})
