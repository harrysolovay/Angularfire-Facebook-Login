module.exports = function(gulp, plugins) {
	return function() {
	
		var // ...
			browserify = require('browserify'),
			source = require('vinyl-source-stream');
		
		browserify('app/scripts/main.js')
  	.bundle()
  	.pipe(source('bundle.js'))
  	.pipe(gulp.dest('app'))
  	.pipe(plugins.connect.reload());
  	
	}
};