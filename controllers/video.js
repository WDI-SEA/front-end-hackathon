var express = require('express'); 
var router = express.Router();
var video = require('../models/video-link');

router.get('/', function(req, res) {
	video.findAll(function (videos) {
		res.send();
	});
});

router.post('/', function(req, res) {
	// example URL
	// https://www.youtube.com/watch?v=nfWlot6h_JM
	var id = req.body.url;
	id = id.split("v=")[1];
	id = id.split("&")[0];

	var newVideo = video({
		url: id
	});

	newVideo.save(function(err) {
		if (err) console.log(err);
		console.log('Video stored');
	});
	console.log(req.body.url);
});

module.exports = router;