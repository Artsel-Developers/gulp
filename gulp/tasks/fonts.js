import fs from "fs";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";

export const ttfToWoff = () => {
  return app.gulp
    .src(app.path.src.fonts + "*.ttf", {})
    .pipe(
      app.plugins.plumber({
        title: "FONTS",
        message: "Error: <%= error.message %>",
      })
    )
    .pipe(ttf2woff())
    .pipe(app.gulp.dest(app.path.dist.fonts));
};

export const ttfToWoff2 = () => {
  return app.gulp
    .src(app.path.src.fonts + "*.ttf", {})
    .pipe(
      app.plugins.plumber({
        title: "FONTS",
        message: "Error: <%= error.message %>",
      })
    )
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.dist.fonts));
};

export const fontStyle = (done) => {
  const fontsStyleFile = app.path.src.scss + "_fonts.scss";

  fs.readdir(app.path.dist.fonts, function (err, fontsFiles) {
    if (fontsFiles) {
      fontsFiles.forEach((font) => {
        const fileName = font.split(".")[0];
        const fileExt = font.split(".")[1];
        const fontInfo = fileName.split("_");
        const fontName = fontInfo[0];
        const fontWeight = fontInfo[1];
        const fontStyle = fontInfo[2];

        const importStr = `@include font("${fontName}", "${fileName}", ${fontWeight}, ${fontStyle});\n`;
        const regexStr = new RegExp(`"${fontName}", "${fileName}", ${fontWeight}, ${fontStyle}`, "g");

        fs.readFile(fontsStyleFile, (err, data) => {
          if (err) throw err;
          const fileContent = data.toString();
          const matches = fileContent.match(regexStr);

          if (matches === null && fileExt === "woff") {
            fs.appendFile(fontsStyleFile, importStr, () => {
              console.log(`[FONTS] Добавлен новый шрифт: ${fontName}, свойства стилей:`);
              console.log("-------------------------");
              console.log(`font-family: ${fontName}\nfont-weight: ${fontWeight}\nfont-weight: ${fontStyle}`);
              console.log("-------------------------");
            });
          }
        });
      });
    }
    done();
  });
};
