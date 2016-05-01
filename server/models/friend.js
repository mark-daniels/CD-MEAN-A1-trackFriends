// REQUIRE
var mongoose = require('mongoose');

// CREATE SCHEMA
var FriendSchema = new mongoose.Schema({
	name: String,
	age: Number
});

// CREATE MODEL
mongoose.model('friend', FriendSchema);