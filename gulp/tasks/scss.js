import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cssmin from "gulp-cssmin";
import autoprefixer from "gulp-autoprefixer";
import media from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp
    .src([app.path.src.scss + "style.scss", app.path.src.scss_pages + "*.scss"], {
      sourcemaps: app.isDev,
    })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(app.plugins.if(app.isBuild, media()))
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowserList: ["last 3 versions"],
          cascade: true,
        })
      )
    )
    .pipe(app.gulp.dest(app.path.dist.css)) // save normal css
    .pipe(app.plugins.if(app.isBuild, cssmin()))
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(app.gulp.dest(app.path.dist.css))
    .pipe(app.plugins.browsersync.stream());
};
