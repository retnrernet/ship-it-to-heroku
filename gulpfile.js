var gulp = require('gulp');
var clean = require('gulp-clean');

// Cleans up compiled folders in example folder
gulp.task('clean', function () {
  var src = 'www/';

  return gulp.src(src, { read: false })
    .pipe(clean({ force: true }));
});
