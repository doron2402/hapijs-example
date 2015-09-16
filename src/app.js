var settings = require('../settings');
var server = require('./server');
var plugins = require('./plugins');
var routes = require('./routes');

server.route(routes);
server.register(plugins(server), function (err) {
  if (err) {
    console.error('Failed to load a plugin:', err);
  }
  if (!module.parent) {
    server.start(function() {
      console.log("Server started", server.info.uri);
    });
  }
});


