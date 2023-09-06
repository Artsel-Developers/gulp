import imagemin from "gulp-imagemin";

export const pictures = () => {
  return app.gulp
    .src(app.path.src.img_pictures + "**/*.{jpg,jpeg,png,gif,webp}")
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES",
          message: "Error: <%= error.message %>",
        })
      )
    )
    // .pipe(
    //   app.plugins.if(
    //     app.isBuild,
    //     imagemin({
    //       progressive: true,
    //       svgoPlugins: [{ removeViewBox: false }],
    //       interlaced: true,
    //       optimizationLevel: 3,
    //     })
    //   )
    // )
    .pipe(app.gulp.dest(app.path.dist.img))
    .pipe(app.plugins.browsersync.stream());
};

export const svg = () => {
  return app.gulp
    .src(app.path.src.img_svg + "**/*.svg")
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "IMAGES",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(app.gulp.dest(app.path.dist.img))
    .pipe(app.plugins.browsersync.stream());
};
