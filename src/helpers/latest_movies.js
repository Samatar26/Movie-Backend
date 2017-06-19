const requestModule = require('request');

const getLatestMovies = (url, cb) => {
  const options = {
    url,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
    },
  };
  return requestModule(options, (err, res, body) => {
    if (err) return cb(err);
    const responseData = JSON.parse(body);
    return cb(null, responseData);
  });
};

const getSearchMovies = (searchTerm, cb) => {
  const options = {
    url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env
      .API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Accept-Charset': 'utf-8',
    },
  };

  return requestModule(options, (err, res, body) => {
    if (err) return cb(err);
    const responseData = JSON.parse(body);
    return cb(null, responseData);
  });
};

module.exports = { getLatestMovies, getSearchMovies };
