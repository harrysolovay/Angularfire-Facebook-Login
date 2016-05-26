module.exports = function(gulp, plugins) {
	return function() {
	
		gulp.src('app/scss/style.scss')
  	
  	.pipe(plugins.compass({
  		sass : 'app/scss',
    	css : 'app',
    	image : 'app/images',
    	style : 'expanded',
    	comments : true
  	}))
  	
  	.pipe(plugins.autoprefixer({ browsers : [
  		'last 2 version',
  		'safari 5',
  		'ie 8',
  		'ie 9',
  		'opera 12.1',
  		'ios 6',
  		'android 4'
  	] }))
  	
  	.pipe(gulp.dest('app'))
  	
  	.pipe(plugins.connect.reload());
  		
	}
};