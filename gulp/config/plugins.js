import plumber from "gulp-plumber";
import notify from "gulp-notify";
import browsersync from "browser-sync";
import ifPlugin from "gulp-if";

export const plugins = {
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  if: ifPlugin,
};
