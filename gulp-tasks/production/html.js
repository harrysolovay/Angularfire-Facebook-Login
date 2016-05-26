module.exports = function(gulp, plugins) {
	return function() {
	
		gulp.src([
  		'app/*.html',
    	'app/**/*.html'
  	])
  
  	.pipe(plugins.htmlmin({ collapseWhitespace : true }))
  	
  	.pipe(plugins.connect.reload())
  
  	.pipe(gulp.dest('dist'));
		
	}
};