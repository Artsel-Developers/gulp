export const server = (done) => {
  app.plugins.browsersync.init({
    server: {
      baseDir: app.path.dist.html,
    },
    notify: true,
    port: 3000,
  });
};
