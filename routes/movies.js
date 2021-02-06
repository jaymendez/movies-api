var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
// Load Profile Model
const Movies = require('../models/Movies');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Movies.find({
	}).limit(500).then(movie => {
		if (!movie) {
			res.send("error");
		}
		console.log(movie)
		res.json(movie);
	});
});

module.exports = router;
