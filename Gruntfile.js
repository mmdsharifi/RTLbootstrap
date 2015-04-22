module.exports = function(grunt) {

	"use strict";

	// Initialize configuration object
	grunt.initConfig({

		// Define configuration for each task
		less: {
			development: {
				options: {
					compress: true  ,// Minification
					optimization: 1
				},
				files: {
					// Compile style.less into style.css
					"dist/css/style.css" : "less/Modules/style.less"
				}
			}
		},
		watch: {
			less: {
				// Watched files
				files: ['less/**/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			}
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	// Set default task
	grunt.registerTask('default', ['watch']);

};
