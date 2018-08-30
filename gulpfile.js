var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

//Sass variables
const input = './sass/*.scss';
const output = './css/';
const dist = './dist/';
var sassOptions = {
	errLogToConsole: true,
	outputStyle: 'expanded'
};

gulp.task('sass', function () {
	return gulp
	.src(input)
	.pipe(sourcemaps.init())
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(sourcemaps.write())
	.pipe(autoprefixer())
	.pipe(gulp.dest(output))
});//End task sass

gulp.task('watch', function() {
	return gulp
	.watch(input, ['sass'])
	.on('change', function(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});//End tastk watch

gulp.task('dist', function () {
	return gulp
	.src(input)
	.pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(minify())
	.pipe(gulp.dest(dist))
});//End taslk dist

gulp.task('default', ['sass','watch']);