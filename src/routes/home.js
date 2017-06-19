module.exports = {
  method: 'GET',
  path: '/{any}',
  handler: (request, reply) => {
    reply.file('./public/index.html');
  },
};
