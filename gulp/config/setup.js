import gulp from "gulp";
import { path } from "./path.js";
import { plugins } from "./plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};
