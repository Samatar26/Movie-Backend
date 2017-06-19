const hapi = require('hapi');
const server = new hapi.Server();
const routes = require('./routes/index');
const port = process.env.PORT || 3000;
require('env2')('config.env');

server.connection({
  port,
  routes: {
    cors: true,
  },
});

server.route(routes);
module.exports = server;
