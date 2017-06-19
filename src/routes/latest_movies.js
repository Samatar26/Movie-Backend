module.exports = {
  method: 'GET',
  path: '/latest',
  handler: (request, reply) => {
    const requestModule = require('request');
    const latestMoviesUri = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process
      .env.API_KEY}&language=en-US&page=1&region=GB
    `;

    const options = {
      url: latestMoviesUri,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Accept-Charset': 'utf-8',
      },
    };

    requestModule(options, (err, res, body) => {
      if (err)
        return reply({ error: 'There was an error retrieving the movies' });
      const responseData = JSON.parse(body);
      reply(responseData);
    });
  },
};
