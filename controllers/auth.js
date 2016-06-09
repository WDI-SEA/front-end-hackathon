var express = require('express'); 
var router = express.Router();
var user = require('../models/user');

router.post('/login', function(req, res) {
// providing we get the username & password
	var user = req.body.username;
	var pass = req.body.password;
});

router.get('/logout', function(req, res) {
	req.session.userId = false;
	console.log(req.session);
	res.redirect('/');
});

module.exports = router;