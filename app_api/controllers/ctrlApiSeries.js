const mongoose = require('mongoose');

//
const serieModel = mongoose.model('TopSerie');

const serielist = function (req, res) {

    serieModel.find({}, function(err, series){
        if (err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(series);
        }
    });
};

const addSerie = function (req, res) {
    serieModel.create(req.body, function(err, newSerie){
            if (err){
                res.status(400).json(err);
            }
            else{
                res.status(201).json(newSerie);
            }
        }
    );
};

module.exports= {
    serielist,
    addSerie
};