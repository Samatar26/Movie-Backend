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

module.exports = getLatestMovies;
