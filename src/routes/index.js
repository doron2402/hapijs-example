var routes = require('./v1');
routes = routes.concat(require('./v2'));

module.exports = routes;