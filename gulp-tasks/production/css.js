module.exports = function(gulp, plugins) {
	return function() {
	
		gulp.src('./app/style.css')
		.pipe(plugins.cssmin())
  	.pipe(gulp.dest('dist'))
		
	}
};