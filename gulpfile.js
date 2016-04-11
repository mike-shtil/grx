var gulp = require('gulp');

//build process
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
//var cssnano = require('gulp-cssnano');


//default task
gulp.task('default', ['sass', 'watch']);

//watch Files For Changes
gulp.task('watch', function() {
   gulp.watch('css/**/*.scss', ['sass']);
});

//SASS build process
gulp.task('sass', function() {
   return gulp.src('css/**/*.scss')
      .pipe(plumber({errorHandler: function(error){
         console.log(error);
         this.emit('end');
      }}))
      .pipe(sourcemaps.init())
      .pipe(sass({errLogToConsole: true, sourcemap: true, style: 'compact'}))
      .pipe(autoprefixer({browsers: ['last 1 version', 'iOS 6'], cascade: false}))
      .pipe(sourcemaps.write({includeContent: true, sourceRoot: '.'}))
      .pipe(gulp.dest('css'));
      //.pipe(cssnano({discardDuplicates: false})) //optional minification
});
