const { getSearchMovies } = require('./../helpers/latest_movies');
module.exports = {
  method: 'POST',
  path: '/search',
  handler: (request, reply) => {
    const { searchTerm } = request.payload;
    getSearchMovies(searchTerm, (err, res) => {
      if (err) reply({ error: 'There was an error retrieving latest movies' });
      reply(res);
    });
  },
};
