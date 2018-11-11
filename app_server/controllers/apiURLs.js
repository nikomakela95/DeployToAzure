const apiURL = {
    server : 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
    apiURLs.server = 'http://mäkelä.azurewebsites.net';
}

module.exports = apiURL;
