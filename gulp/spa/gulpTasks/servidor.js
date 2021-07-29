const gulp = require('gulp')
const webserver = require('gulp-webserver')
//const watch = require('gulp-watch')

function servidor(cb) {
  return gulp.src('build')
    .pipe(webserver({
      port: 8080,
      open: true,
      livereload: true,
    }))
}

function monitorarArquivos(cb) {
  // watch('src/**/*.html', () => gulp.series('appHTML')())
  // watch('src/**/*.scss', () => gulp.series('appCSS')())
  // watch('src/**/*.js', () => gulp.series('appJS')())
  // watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

  gulp.watch('src/**/*.html', gulp.series('appHTML'))
  gulp.watch('src/**/*.scss', gulp.series('appCSS'))
  gulp.watch('src/**/*.js', gulp.series('appJS'))
  gulp.watch('src/assets/imgs/**/*.*', gulp.series('appIMG'))

  return cb()
}

module.exports = {
  monitorarArquivos,
  servidor
}