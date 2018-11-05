
const mongoose = require('mongoose');


const movieModel = mongoose.model('TopMovie');

const movieList = function (req, res) {

    movieModel.find({}, function(err, movies){
        if (err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(movies);
        }
    });
};

const addMovie = function (req, res) {
    movieModel.create(req.body, function(err, newMovie){
            if (err){
                res.status(400).json(err);
            }
            else{
                res.status(201).json(newMovie);
            }
        }
    );
};

module.exports= {
    movieList,
    addMovie
};