const mongoose = require('mongoose');

const dbURI = 'mongodb://maxi95:dbpass123@ds046027.mlab.com:46027/dbmongo';

mongoose.connect(dbURI);

// Printing a connection status message to the console
mongoose.connection.on('connected', function(){
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

require('./appSchemas');