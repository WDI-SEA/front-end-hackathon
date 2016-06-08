// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var User = require('./models/user');
var session = require('express-session');
var router = express.Router();

//local dependencies 

var app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));

mongoose.connect('mongodb://localhost:27017/Stuart');

app.use(session({
  secret: 'hoo de lolly dont steal my stuff',
  resave: false,
  saveUninitialized: true
}));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/linkloader', function(req, res) {
  res.render('linkloader');
});

app.listen(3000);