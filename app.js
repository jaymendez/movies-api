require('dotenv').config()
var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors')
var logger = require('morgan');

var moviesRouter = require('./routes/movies');
var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// DB Config
const db = process.env.mongo_uri;

//Connect to MongoDB
mongoose
	.connect(db, {
			useNewUrlParser: true
	})
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

app.use('/', indexRouter);
app.use('/api/movies', moviesRouter);
// app.use('/users', usersRouter);

module.exports = app;
