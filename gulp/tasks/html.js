import gulpNunjucks from "gulp-nunjucks";
import nunjucks from "nunjucks";
import versionNumber from "gulp-version-number";
import prettier from "gulp-prettier";
import fs from "fs";

// Function for import json files in var exp: set data = 'file.json'
function importJSON(filePath) {
  const jsonData = fs.readFileSync(app.path.src.html_pages + filePath, "utf8");
  return JSON.parse(jsonData);
}

export const html = () => {
  const env = nunjucks.configure(app.path.src.html_components, {
    autoescape: true,
  });

  // Add function for import json
  env.addFilter("json", importJSON);

  return app.gulp
    .src([app.path.src.html_pages + "**/*.html", app.path.src.html_pages + "**/*.njk"])
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(gulpNunjucks.compile(null, { env }))
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          value: "%DT%",
          append: {
            key: "_v",
            cover: 0,
            to: ["css", "js"],
          },
          output: {
            file: "gulp/version.json",
          },
        })
      )
    )
    .pipe(prettier({ singleQuote: true }))
    .pipe(app.gulp.dest(app.path.dist.html))
    .pipe(app.plugins.browsersync.stream());
};
