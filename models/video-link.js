var mongoose = require('mongoose');

var videolinkSchema = new mongoose.Schema({
	url: { type: String, required: true, unique: true },
});

videolinkSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      url: ret.url
    };
    return returnJson;
  }
});

videolinkSchema.pre('save', function(next) {

});

var videolink = mongoose.model('videolink', videolinkSchema);

module.exports = videolink;  