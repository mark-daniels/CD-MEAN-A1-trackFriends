// REQUIRE
var mongoose = require('mongoose');
var fs = require('fs');

// DB CONNECT
// mongoose.connect('mongodb://localhost/FullMean_Friends');
mongoose.connect('mongodb://friendsUser:password@ds013232.mlab.com:13232/fullmeanfriends');

// PATH TO MODELS
var models_path = __dirname + '/../models';

// CHECK FOR .js FILES, and REQUIRE MODELS
fs.readdirSync(models_path).forEach(function(file) {
	if (file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
});