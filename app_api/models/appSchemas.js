const mongoose = require('mongoose');

// Schemas define the document structure used in the app
const topMovieSchema = new mongoose.Schema({year:String, name:String});
const topSeriesSchema = new mongoose.Schema({year:String, name:String});

/* Models will contain compiled instances of the schemas
 * so they can be used in the app later on
 */
mongoose.model('TopMovie', topMovieSchema, 'TopMovies');
mongoose.model('TopSerie', topSeriesSchema,'TopSeries');