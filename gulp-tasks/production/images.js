module.exports = function(gulp, plugins) {
	return function() {
	
		gulp.src([
    	'app/images/*.{jpg,png}',
    	'app/images/*/*.{jpg,png}',
    	'app/images/*/*/*.{jpg,png}'
    ])
    
    .pipe(plugins.imageOptimization({
    	optimizedLevel : 5,
      progressive : true,
			interlaced : true
		}))
		
		.pipe(gulp.dest('dist/images'));
		
	}
};