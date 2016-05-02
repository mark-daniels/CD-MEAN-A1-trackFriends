var mongoose = require('mongoose');
var Friend = mongoose.model('friend');

module.exports = (function() {
	return {
		index: function(req, res) {
			Friend.find({}, function(err, results) {
				if (err) {
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},

		create: function(req, res) {
			console.log("POST DATA", req.body);

			if (req.body.name) {
				var newFriend = new Friend({ name: req.body.name, age: req.body.age });
				newFriend.save(function(err, results) {
					if (err) {
						console.log('Something went wrong', err);
					} else {
						console.log('Successfully added new friend!');
						res.json(results);
					}
				});
			}
		}
	}
})();
