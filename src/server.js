const hapi = require('hapi');
const server = new hapi.Server();

const port = process.env.PORT || 3000;

server.connection({
  port,
  routes: {
    cors: true,
  },
});

module.exports = server;
