
const movielist = function(req, res){
    res.render('movie',{
        movies:
        [
            {year:'1994', name:' Rita Hayworth - avain pakoon'},
            {year:'1972', name:' The Godfather'},
            {year:'1974', name:' Kummisetä osa II'},
            {year:'2008', name:'Yön ritari'},
            {year:'1957', name:'Valamiesten ratkaisu'},
            {year:'1993', name:'Schindlerin lista'},
            {year:'2003', name:'Taru sormusten herrasta: Kuninkaan paluu'},
            {year:'1994', name:'Pulp Fiction: Tarinoita väkivallasta'}
        ]});
};
module.exports = {
    movielist
};