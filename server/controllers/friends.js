module.exports = (function() {
	return {
		index: function(req, res) {
			res.json([{name: "Andrew", age: 25}, {name: "Michael", age: 35}]);
		}
	}
})();