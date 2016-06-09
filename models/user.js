var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true, unique: true}
});

userSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    var returnJson = {
      id: ret._id,
      email: ret.email,
      name: ret.name
    };
    return returnJson;
  }
});

userSchema.methods.authenticated = function(password, callback) {
	bcrypt.compare(password, this.password, function(err, res) {
		if (err) {
			callback(err);
		} else {
			callback(null);
		};
	});
};

userSchema.pre('save', function(next) {
	if (!this.isModified('password')) {
		next();
	} else {
		this.password = bcrypt.hashSync(this.password, 10);
		next();
	};
});

var User = mongoose.model('User', userSchema);

module.exports = User;


// ajax-controller-model-contoller-ajax