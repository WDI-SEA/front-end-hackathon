var express = require('express'); 
var router = express.Router();
// var db = require('../models');

router.post('/', function(req, res) {
// providing we get the username & password
	var user = req.body.username;
	var pass = req.body.password;
	db.user.authenticate(user, pass, function(err, user) {
// admin successfully logged in
		if(user) {
			req.session.userId = user.id;
			res.redirect('/');
		} else {
			console.log(err);
		}
	});
});

router.get('/', function(req, res) {
	req.session.userId = false;
	console.log(req.session);
	res.redirect('/');
});

module.exports = router;