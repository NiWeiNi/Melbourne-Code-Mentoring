var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('default', defaultTask);

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server:"./"
  });

  gulp.watch("./sass/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src("./sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

function defaultTask(done) {
  // place code for your default task here
  done();
}

gulp.task('default', ['serve']);
