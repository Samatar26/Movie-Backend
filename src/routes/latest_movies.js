const { getLatestMovies } = require('./../helpers/latest_movies');
module.exports = {
  method: 'GET',
  path: '/latest',
  handler: (request, reply) => {
    const latestMoviesUri = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process
      .env.API_KEY}&language=en-US&page=1&region=GB
    `;
    getLatestMovies(latestMoviesUri, (err, res) => {
      if (err) reply({ error: 'There was an error retrieving latest movies' });
      reply(res);
    });
  },
};
