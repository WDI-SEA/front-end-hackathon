var express = require('express');
// var ejsLayouts = require('express-ejs-layouts');
var session = require('express-session');
var router = express.Router();

var app = express();

app.set('view engine', 'ejs');
// app.use(ejsLayouts);

app.use(session({
  secret: 'hoo de lolly dont steal my stuff',
  resave: false,
  saveUninitialized: true
}));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000);