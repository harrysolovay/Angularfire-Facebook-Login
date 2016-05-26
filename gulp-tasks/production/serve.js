module.exports = function(gulp, plugins) {
	return function() {
	
		gulp.src('./dist')
		
		.pipe(plugins.webserver({
			port : '8080',
			open : true
		}));
		
	}
};