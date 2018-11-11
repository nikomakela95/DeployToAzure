const apiURL = {
    server : 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
    apiURLs.server = 'http://xn--mkel-load.azurewebsites.net/';
}

module.exports = apiURL;
