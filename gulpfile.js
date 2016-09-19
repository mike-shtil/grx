var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var package = require('./package.json');

//default task
gulp.task('default', ['dist', 'watch']);

//watch Files For Changes
gulp.task('watch', function() {
  return gulp.watch('**/*.scss', ['dist']);
});

//SASS build process
gulp.task('dist', function() {
   return gulp.src('src/**/*.scss')
      .pipe($.plumber({errorHandler: function(error){
         console.log(error);
         this.emit('end');
      }}))
      //.pipe($.sourcemaps.init())
      .pipe($.sass({errLogToConsole: true, sourcemap: true, style: 'compact'}))
      .pipe($.autoprefixer({browsers: ['last 1 version', 'iOS 6'], cascade: false}))
      //.pipe($.sourcemaps.write({includeContent: false, sourceRoot: '.'}))
      .pipe($.clean())
      .pipe($.replace('[version]', package.version))
      .pipe(gulp.dest('dist'))
      .pipe($.cssnano({discardDuplicates: false, discardComments: true, sourcemap: false}))
      .pipe($.rename({suffix: '.min'}))
      .pipe(gulp.dest('dist'))
      .pipe($.gzip())
      .pipe(gulp.dest('dist'));
});
