module.exports = function(gulp, plugins) {
	return function() {

		plugins.connect.server({
			root : 'app',
			livereload : true
		});
		
	}
};