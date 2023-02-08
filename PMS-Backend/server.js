const express = require("express");
const http = require('http');
const bodyParser = require('body-parser');
const app = module.exports.app = express();
const server = http.createServer(app);
const db = require("./models");
db.models.sequelize.sync();

app.get('/health', (req, res) => {
  res.send('Ok')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cors setting
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.use('/api', require('./routes/api'));

const port = process.env.PORT ;
server.listen(port, () => {
  console.log("Server started on port 3000...");
});
server.setTimeout(5000000);


