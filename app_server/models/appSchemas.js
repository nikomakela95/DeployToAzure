const mongoose = require('mongoose');

// Schemas define the document structure used in the app
const topMovieSchema = new mongoose.Schema({year:String, movie:String});
const topSerieSchema = new mongoose.Schema({year:String, serie:String});

/* Models will contain compiled instances of the schemas
 * so they can be used in the app later on
 */
mongoose.model('TopMovies', topMovieSchema, 'Movies');
mongoose.model('TopSeries', topSerieSchema,'Series');