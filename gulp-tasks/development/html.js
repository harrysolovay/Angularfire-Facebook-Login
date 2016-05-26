module.exports = function(gulp, plugins) {
	return function() {
	
		gulp.src([
  		'app/*.html',
    	'app/**/*.html'
  	])
  	
  	.pipe(plugins.connect.reload());
  	
	}
};