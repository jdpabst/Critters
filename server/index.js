const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var massive = require('massive');
var session = require('express-session');
var config = require('./config.js');

const app = module.exports = express();

app.use(bodyParser.json());

massive(config.connection)
.then( db => {
  app.set('db', db)});


app.use(express.static(__dirname + './../build'));

var userController = require("./userController.js");

//////////Endpoints for the front end
app.post('/api/add', userController.addSpecies);



app.listen(config.port, console.log("you are now connected on " + config.port))
