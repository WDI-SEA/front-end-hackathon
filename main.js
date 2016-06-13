// external dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var mongoose = require('mongoose');
var User = require('./models/user');
var session = require('express-session');

//local dependencies 
var app = express();
var User = require('./models/user');
var Video = require('./models/video-link');
var authCtrl = require('./controllers/auth');
var videoCtrl = require('./controllers/video');
var video = require('./models/video-link');


app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));

app.use('/auth', authCtrl);
app.use('/video', videoCtrl);

app.use(session({
  secret: 'hoo de lolly dont steal my stuff',
  resave: false,
  saveUninitialized: true
}));

mongoose.connect('mongodb://localhost:27017/Stuart');
// mongodb://+process.env.MONGO_USER+":"+process.env<dbuser>:<dbpassword>@ds011374.mlab.com:11374/stuart, 

app.get('/', function(req, res) {
	video.find({}, function (err, videos) {
		console.log("all videos", videos);

		videos.reverse()

		res.render('index', {videos: videos});
	});
});

app.get('/linkloader', function(req, res) {
  res.render('linkloader');
});

app.post('/user', function(req, res) {
	User.findOne({ username: req.body.username }, function(err, user) {
		if (err || !user) return res.status(401).send({message: "User not found"});
		if (user.password === req.body.password) {
			req.session.user = user;
			res.send("success");
		} else {
			res.status(401).send("error");
		}
	});
});




app.listen(3000);