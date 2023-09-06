import fs from "fs";

const messages = {
  scss: {
    style: `@import "variables";\n@import "mixins";\n@import "libs";\n@import "fonts";\n@import "base";\n\n// Blocks\n\n// Sections\n\n// Pages\n\n`,
    mixins: `
@mixin font($font_name, $file_name, $weight, $style) {
  @font-face {
    font-family: $font_name;
    font-display: swap;
    src: url("../fonts/#{$file_name}.woff") format("woff"),
      url("../fonts/#{$file_name}.woff2") format("woff2");
    font-weight: #{$weight};
    font-style: #{$style};
  }
}\n
`,
  },
};

export const init = (done) => {
  // Folders: DATA
  fs.mkdirSync(app.path.src.data, { recursive: true });

  // Folders: HTML
  fs.mkdirSync(app.path.src.html, { recursive: true });
  fs.mkdirSync(app.path.src.html_pages, { recursive: true });
  fs.mkdirSync(app.path.src.html_components, { recursive: true });
  fs.mkdirSync(app.path.src.html_components + "blocks", { recursive: true });
  fs.mkdirSync(app.path.src.html_components + "sections", { recursive: true });

  // Folders: SCSS
  fs.mkdirSync(app.path.src.scss, { recursive: true });
  fs.mkdirSync(app.path.src.scss_pages, { recursive: true });
  fs.mkdirSync(app.path.src.scss_components, { recursive: true });
  fs.mkdirSync(app.path.src.scss_components + "blocks", { recursive: true });
  fs.mkdirSync(app.path.src.scss_components + "sections", { recursive: true });

  // Folders: JS
  fs.mkdirSync(app.path.src.js, { recursive: true });
  fs.mkdirSync(app.path.src.js_pages, { recursive: true });
  fs.mkdirSync(app.path.src.js_components, { recursive: true });
  fs.mkdirSync(app.path.src.js_components + "blocks", { recursive: true });
  fs.mkdirSync(app.path.src.js_components + "sections", { recursive: true });

  // Folders: FONTS
  fs.mkdirSync(app.path.src.fonts, { recursive: true });

  // Folders: IMG
  fs.mkdirSync(app.path.src.img, { recursive: true });
  fs.mkdirSync(app.path.src.img_svg, { recursive: true });
  fs.mkdirSync(app.path.src.img_pictures, { recursive: true });

  // Folders: IMG
  fs.mkdirSync(app.path.src.libs, { recursive: true });

  // Files: HTML
  if (!fs.existsSync(app.path.src.html_pages + "index.html")) {
    fs.writeFile(app.path.src.html_pages + "index.html", "", (err) => {
      if (err) throw err;
    });
  }

  // Files: SCSS
  if (!fs.existsSync(app.path.src.scss + "_variables.scss")) {
    fs.writeFile(app.path.src.scss + "_variables.scss", "", (err) => {
      if (err) throw err;
    });
  }
  if (!fs.existsSync(app.path.src.scss + "_mixins.scss")) {
    fs.writeFile(app.path.src.scss + "_mixins.scss", messages.scss.mixins, (err) => {
      if (err) throw err;
    });
  }
  if (!fs.existsSync(app.path.src.scss + "_libs.scss")) {
    fs.writeFile(app.path.src.scss + "_libs.scss", "", (err) => {
      if (err) throw err;
    });
  }
  if (!fs.existsSync(app.path.src.scss + "_fonts.scss")) {
    fs.writeFile(app.path.src.scss + "_fonts.scss", "", (err) => {
      if (err) throw err;
    });
  }
  if (!fs.existsSync(app.path.src.scss + "_base.scss")) {
    fs.writeFile(app.path.src.scss + "_base.scss", "", (err) => {
      if (err) throw err;
    });
  }
  if (!fs.existsSync(app.path.src.scss + "style.scss")) {
    fs.writeFile(app.path.src.scss + "style.scss", messages.scss.style, (err) => {
      if (err) throw err;
    });
  }

  // Files: JS
  if (!fs.existsSync(app.path.src.js + "script.js")) {
    fs.writeFile(app.path.src.js + "script.js", "", (err) => {
      if (err) throw err;
    });
  }

  done();
};
