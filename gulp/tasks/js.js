import webpack from "webpack-stream";
import named from "vinyl-named";
import rename from "gulp-rename";

export const js = () => {
  return (
    app.gulp
      .src([app.path.src.js + "script.js", app.path.src.js_pages + "*.js"], { sourcemaps: app.isDev })
      .pipe(
        app.plugins.plumber(
          app.plugins.notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>",
          })
        )
      )

      // Save original js
      .pipe(named())
      .pipe(
        webpack({
          mode: "production",
          optimization: {
            minimize: false,
          },
        })
      )
      .pipe(app.gulp.dest(app.path.dist.js))

      // Production js
      .pipe(named())
      .pipe(
        webpack({
          mode: app.isBuild ? "production" : "development",
        })
      )
      .pipe(
        rename({
          extname: ".min.js",
        })
      )
      .pipe(app.gulp.dest(app.path.dist.js))
      .pipe(app.plugins.browsersync.stream())
  );
};
