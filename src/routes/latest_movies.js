module.exports = {
  method: 'GET',
  path: '/latest',
  handler: (request, reply) => {
    reply('Working route');
  },
};
