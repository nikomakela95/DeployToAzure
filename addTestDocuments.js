

/* Remove all collections and documents from the current database.
 * This will not delete the database.
 */
db.dropDatabase();

// Creating the 'movie' collection and adding some documents
db.TopMovies.save(
    [
        {year:'1994', name:' Rita Hayworth - avain pakoon'},
        {year:'1972', name:' The Godfather'},
        {year:'1974', name:' Kummisetä osa II'},
        {year:'2008', name:'Yön ritari'},
        {year:'1957', name:'Valamiesten ratkaisu'},
        {year:'1993', name:'Schindlerin lista'},
        {year:'2003', name:'Taru sormusten herrasta: Kuninkaan paluu'},
        {year:'1994', name:'Pulp Fiction: Tarinoita väkivallasta'}
    ]
);

db.TopSeries.save(
    [
        {year:'2016', name:'Planeettamme Maa II'},
        {year:'2001', name:'Taistelutoverit'},
        {year:'2006', name:'Planeettamme maa'},
        {year:'2011', name:'Game of Thrones'},
        {year:'2008', name:'Breaking Bad'},
        {year:'2002', name:'Langalla'},
        {year:'2014', name:' Cosmos: Kaikki elämästä'},
        {year:'2013', name:' Rick and Morty'}
    ]
);