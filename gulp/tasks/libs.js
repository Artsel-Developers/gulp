export const libs = () => {
  return app.gulp
    .src(app.path.src.libs + "**/*.*")
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "LIBS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.dist.libs))
    .pipe(app.plugins.browsersync.stream());
};
