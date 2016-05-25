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
			if (req.body.name) {
				var newFriend = new Friend({ name: req.body.name, age: req.body.age });
				newFriend.save(function(err, results) {
					if (err) {
						console.log('Something went wrong: ', err);
					} else {
						console.log('Successfully added new friend: ', req.body.name);
						res.json(results);
					}
				});
			}
		},

		delete: function(req, res) {
			Friend.findByIdAndRemove(req.params.id, function(err, results) {
				if (err) {
					console.log('Something went wrong: ', err);
				} else {
					res.json(results);
					console.log('Successfully deleted: ', req.params.id)
				}
			});
		}
	}
})();
