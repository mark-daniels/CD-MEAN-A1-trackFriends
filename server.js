// REQUIRE
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
require('./server/config/routes.js')(app);

// USE
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client')));

// LISTEN
app.listen(8000, function() {
	console.log('cool stuff on: 8000');
});

