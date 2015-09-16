var fs = require('fs');
var path = require('path');
var routesPath = './src/routes';
var routes = [];
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

getDirectories(routesPath).forEach(function(dir){
  routes = routes.concat(require('./' + dir));
});

module.exports = routes;
