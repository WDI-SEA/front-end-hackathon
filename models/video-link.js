var mongoose = require('mongoose');

var videolinkSchema = new mongoose.Schema({
	url: { type: String, required: true, unique: true },
});

videolinkSchema

var videolink = mongoose.model('videolink', videolinkSchema);

module.exports = videolink; 