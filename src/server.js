const hapi = require('hapi');
const server = new hapi.Server();
const routes = require('./routes/index');
const port = process.env.PORT || 3000;

server.connection({
  port,
  routes: {
    cors: true,
  },
});

server.route(routes);
module.exports = server;
