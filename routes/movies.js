var express = require('express');
var moment = require('moment');
const mongoose = require('mongoose');

var router = express.Router();

// Load Movies Model
const Movies = require('../models/Movies');

/* GET all movies. */
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

/* Get top movies */
router.get('/top', function (req, res, next) {
	let limit = 500;
	let year = 2015;
	let start, end;
	if (req.query.limit) {
		limit = req.query.limit;
	}
	if (req.query.year) {
		year = req.query.year
		start = moment(year, "YYYY").startOf('year').format("YYYY-MM-DD")
		end = moment(year, "YYYY").endOf('year').format("YYYY-MM-DD")
	}
	Movies
		.find({
			release_date: {
				$gte: start,
				$lte: end
			}
		})
		.sort({ popularity: -1 })
		.collation({ locale: "en_US", numericOrdering: true })
		.limit(parseInt(limit, 10))
		.then(movie => {
			if (!movie) {
				res.send("error");
			}
			res.json(movie);
		})
		.catch(err => res.status(404).json(err));
});

module.exports = router;
