const hapi = require('hapi');
const server = new hapi.Server();
const inert = require('inert');
const routes = require('./routes/index');
const port = process.env.PORT || 4000;
require('env2')('config.env');

server.connection({
  port,
  routes: {
    cors: true,
  },
});

server.register(inert, () => {
  server.route(routes);
});
module.exports = server;
