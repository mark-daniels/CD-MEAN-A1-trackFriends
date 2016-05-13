// REQUIRES
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// USE
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

// REQUIRE
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// LISTEN
app.listen(process.env.PORT || 5000, function() {
	console.log('cool stuff on: 5000');
});

