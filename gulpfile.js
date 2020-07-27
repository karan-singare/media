const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
  // 1.Where is my scss files?
  return gulp.src('./sass/**/*.scss')
  // 2. pass that files through sass compiler
  .pipe(sass())
  // 3. rename the output file to desired name
  // 4.where do I save the compiled CSS?
  .pipe(gulp.dest('./css'))
  // 5. Stream changes to all browser
  .pipe(browserSync.stream());
}


function watch() {
  browserSync.init();

  gulp.watch('./sass/**/*.scss', style);
  gulp.watch('./index.html').on('change', browserSync.reload);
  gulp.watch('./js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
