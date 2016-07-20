var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

//default task
gulp.task('default', ['demo', 'dist', 'watch']);

//watch Files For Changes
gulp.task('watch', function() {
  return gulp.watch('**/*.scss', ['dist']);
});

gulp.task('demo', function(){
  return gulp.src('demo/styles/**/*.scss')
     .pipe($.plumber({errorHandler: function(error){
        console.log(error);
        this.emit('end');
     }}))
     .pipe($.sourcemaps.init())
     .pipe($.sass({errLogToConsole: true, sourcemap: true, style: 'compact'}))
     .pipe($.autoprefixer({browsers: ['last 1 version', 'iOS 6'], cascade: false}))
     .pipe($.sourcemaps.write({includeContent: false, sourceRoot: '.'}))
     //.pipe($.cssnano({discardDuplicates: false})) //optional minification
     .pipe(gulp.dest('demo/styles'));
});

//SASS build process
gulp.task('dist', function() {
   return gulp.src('src/**/*.scss')
      .pipe($.plumber({errorHandler: function(error){
         console.log(error);
         this.emit('end');
      }}))
      .pipe($.sourcemaps.init())
      .pipe($.sass({errLogToConsole: true, sourcemap: true, style: 'compact'}))
      .pipe($.autoprefixer({browsers: ['last 1 version', 'iOS 6'], cascade: false}))
      .pipe($.sourcemaps.write({includeContent: false, sourceRoot: '.'}))
      .pipe(gulp.dest('dist'))
      .pipe($.cssnano({discardDuplicates: false})) //optional minification
      .pipe($.rename({suffix: '.min'}))
      .pipe(gulp.dest('dist'));
});
