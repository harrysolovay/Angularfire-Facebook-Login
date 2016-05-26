module.exports = function(gulp, plugins) {
	return function() {
    
    gulp.watch([
  		'app/*.html',
    	'app/**/*.html'
  	], ['development:html']);
    gulp.watch(['app/scss/*.scss'], ['development:scss']);
    gulp.watch(['app/scripts/*.js'], ['development:javascript']);
		
	}
};