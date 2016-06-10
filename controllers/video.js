var express = require('express'); 
var router = express.Router();
var video = require('../models/video-link');

router.post('/', function(req, res) {
		var newVideo = video({
	url: 'https://www.youtube.com/embed/' + id
	});

	newVideo.save(function(err) {
		if (err) onsole.log(err);
		console.log('Video stored');
	});
	console.log(req.body.url);
});

module.exports = router;