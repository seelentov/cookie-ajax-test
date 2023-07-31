import webpack from "webpack-stream"

export const xhr = () => {
  return app.gulp.src(app.path.src.xhr, {sourcemap:true})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'XHR',
      message: 'Error: <%= error.message %>'
    }))
  )
  .pipe(webpack({
    mode:app.isBuild ? 'production' : 'development',
    output: {
      filename: 'xhr.min.js'
    }
  }))
  .pipe(app.gulp.dest(app.path.build.xhr))
  .pipe(app.plugins.browsersync.stream())
}