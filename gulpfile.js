var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pump = require('pump');

var fileName = "Arrowhead";
var folderSource = "src/";
var folderDestination = "dist/";

gulp.task("build-js", function (callback) {
	pump([
		gulp.src(folderSource + "*.js"),
		uglify(),
		concat(fileName + ".min.js"),
		gulp.dest("docs/assets/js/")
	], callback);
});

gulp.task("default", ["build-js"]);