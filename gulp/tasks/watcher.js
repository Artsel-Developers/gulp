import { html } from "./html.js";
import { scss } from "./scss.js";
import { js } from "./js.js";

export const watcher = () => {
  app.gulp.watch(app.path.watch.json, html);
  app.gulp.watch(app.path.watch.html, html);
  app.gulp.watch(app.path.watch.scss, scss);
  app.gulp.watch(app.path.watch.js, js);
};
