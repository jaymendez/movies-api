var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
// Load Profile Model
const Movies = require('../models/Movies');

/* GET users listing. */
router.get('/', function (req, res, next) {
	let limit = 10;
	if (req.query.limit) {
		limit = req.query.limit;
	}
	console.log(limit)
	Movies.find()
		.limit(parseInt(limit, 10))
		.then(movie => {
			if (!movie) {
				res.send("error");
			}
			console.log(movie)
			res.json(movie);
		})
		.catch(err => res.status(404).json(err));
});

module.exports = router;
