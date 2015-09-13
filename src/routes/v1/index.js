module.exports = [{
    method: 'GET',
    path: '/v1/hello/{user*2}',
    handler: function (request, reply) {
        var userParts = request.params.user.split('/');
        reply('Hello ' + encodeURIComponent(userParts[0]) + ' ' + encodeURIComponent(userParts[1]) + '!');
    }
},{
	method: 'GET',
    path: '/v1/hello/doron',
    handler: function (request, reply) {
        reply({code: 'ok', version: 'v1'}).code(200);
    }
}];