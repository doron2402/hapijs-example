var Hapi = require('hapi');
var settings = require('../settings');
var server = new Hapi.Server(settings.server);
server.app.name = 'API';
server.connection(settings.connection);
module.exports = server;
