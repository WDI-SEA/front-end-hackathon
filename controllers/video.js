var express = require('express'); 
var router = express.Router();
var video = require('../models/video-link');

router.post('/', function(req, res) {
	console.log(req.body.url);
})

module.exports = router;