/*
	Versioning Plugin
*/
exports.register = function (server, options, next) {
	//Check if header contains version
	server.ext('onRequest', function (request, reply) {
		var urlPath = request.url.pathname.split('/');
		urlPath[0] === '' ? urlPath.shift() : null;
		var pattern = options.pattern || /^(v[1-9])$/;
		if (pattern.test(request.headers.version) && !pattern.test(urlPath[0])){
			urlPath.unshift('',request.headers.version);
			request.setUrl(urlPath.join('/'));
		}
    reply.continue();
	});
	next();
};

exports.register.attributes = {
    name: 'versioningPlugin',
    version: '1.0.0'
};
