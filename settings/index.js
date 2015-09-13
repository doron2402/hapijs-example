var environments = ['dev', 'prod'];
module.exports = (function(){
	if (environments.indexOf(process.env.NODE_ENV) !== -1){
		return require('./' + process.env.NODE_ENV);
	} else {
		return require('./dev');
	}
})();
