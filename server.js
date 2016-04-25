// REQUIRE
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// USE
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));
app.listen(8000, function() {
	console.log('coolest things on: 8000');
});

