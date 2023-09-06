// Imports
import { init } from "../tasks/init.js";
import { reset } from "../tasks/reset.js";
import { html } from "../tasks/html.js";
import { scss } from "../tasks/scss.js";
import { js } from "../tasks/js.js";
import { libs } from "../tasks/libs.js";
import { watcher } from "../tasks/watcher.js";
import { server } from "../tasks/server.js";
import * as Images from "../tasks/img.js";
import * as Fonts from "../tasks/fonts.js";

// Group tasks
const images = app.gulp.series(Images.pictures, Images.svg);
const fonts = app.gulp.series(
  Fonts.ttfToWoff,
  Fonts.ttfToWoff2
  // Fonts.fontStyle
);

const tasklist = app.gulp.series(reset, fonts, html, scss, js, images, libs);
const dev = app.gulp.series(tasklist, app.gulp.parallel(watcher, server));
const build = tasklist;

// Setup Commands
app.gulp.task("dev", dev);
app.gulp.task("build", build);
app.gulp.task("fonts", fonts);
app.gulp.task("images", images);
app.gulp.task("init", init);
