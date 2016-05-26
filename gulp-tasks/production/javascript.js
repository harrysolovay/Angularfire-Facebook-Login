module.exports = function(gulp, plugins) {
	return function() {
	
		gulp.src('./app/bundle.js')
		.pipe(plugins.uglify())
		.pipe(gulp.dest('./dist'));
		
	}
};