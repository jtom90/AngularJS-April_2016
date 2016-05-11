'use strict';

var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(db) {
	var app = express();
	app.use(bodyParser.json());

	// Load in Database models
	require('../models/todo.model');

	// your models would go here
	// require('../models/recipe.model');

	app.use(express.static('./dist'));

	// Load in Route handlers
	require('../routes/todo.routes')(app);
	
	// your routes would go here
	//require('../routes/recipe.routes')(app);

	require('../routes/yelp.routes')(app);

	return app;
};