


var // ...
	gulp = 		require('gulp'),
	plugins = require('gulp-load-plugins')();
	
gulp.task('development:html', require('./gulp-tasks/development/html.js')(gulp, plugins));
gulp.task('development:scss', require('./gulp-tasks/development/scss.js')(gulp, plugins));
gulp.task('development:javascript', require('./gulp-tasks/development/javascript.js')(gulp, plugins));
gulp.task('development:serve', require('./gulp-tasks/development/serve.js')(gulp, plugins));
gulp.task('development:watch', require('./gulp-tasks/development/watch.js')(gulp, plugins));

gulp.task('default', ['development:html', 'development:scss', 'development:javascript', 'development:serve', 'development:watch']);

gulp.task('production:html', require('./gulp-tasks/production/html.js')(gulp, plugins));
gulp.task('production:css', require('./gulp-tasks/production/css.js')(gulp, plugins));
gulp.task('production:javascript', require('./gulp-tasks/production/javascript.js')(gulp, plugins));
gulp.task('production:images', require('./gulp-tasks/production/images.js')(gulp, plugins));
gulp.task('production:serve', require('./gulp-tasks/production/serve.js')(gulp, plugins));

gulp.task('build', ['production:html', 'production:css', 'production:javascript']);