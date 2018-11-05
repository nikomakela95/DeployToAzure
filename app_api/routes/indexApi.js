const express = require('express');
const router = express.Router();

const ctrlApiMovies = require('../controllers/ctrlApiMovies'); // Controller for the movies
const ctrlApiSeries = require('../controllers/ctrlApiSeries'); // Controller for the series

router
    .route('/movie')
    .get(ctrlApiMovies.movieList)
    .post(ctrlApiMovies.addMovie);

router
    .route('/serie')
    .get(ctrlApiSeries.serielist)
    .post(ctrlApiSeries.addSerie);

module.exports = router;
