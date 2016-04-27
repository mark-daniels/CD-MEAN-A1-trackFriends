module.exports = function(app) {
	app.get('/friends', function(req, res) {
		res.json([{name: "Andrew", age: 24}, {name: "Michael", age: 34}]);
	});
};