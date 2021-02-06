const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
	id: {
		type: String
	},
	budget: {
		type: String
	},
	title: {
		type: String
	},
	original_title: {
		type: String
	},
	release_date: {
		type: String
	},
	vote_average: {
		type: String
	},
	popularity: {
		type: String
	},
	overview: {
		type: String
	},
	genres: {
		type: String
	},
})

module.exports = Movies = mongoose.model('movies', MoviesSchema);