const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlMovie = require('../controllers/ctrlMovies'); // Controller for the movies
const ctrlSerie = require('../controllers/ctrlSeries'); // Controller for the series

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/movie', ctrlMovie.movielist);  // List of TOP movies in imdb
router.get('/serie', ctrlSerie.serielist);  // List of TOP series in imdb

module.exports = router;