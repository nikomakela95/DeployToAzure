
const serielist = function(req, res){
    res.render('serie',{
        series:
        [
            {year:'2016', name:'Planeettamme Maa II'},
            {year:'2001', name:'Taistelutoverit'},
            {year:'2006', name:'Planeettamme maa'},
            {year:'2011', name:'Game of Thrones'},
            {year:'2008', name:'Breaking Bad'},
            {year:'2002', name:'Langalla'},
            {year:'2014', name:' Cosmos: Kaikki elämästä'},
            {year:'2013', name:' Rick and Morty'}
        ]});
};

module.exports = {
    serielist
};