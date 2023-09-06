const distFolder = "./dist";
const srcFolder = "./src";

export const path = {
  dist: {
    folder: `${distFolder}/`,
    html: `${distFolder}/`,
    css: `${distFolder}/assets/css/`,
    js: `${distFolder}/assets/js/`,
    img: `${distFolder}/assets/img/`,
    img_svg: `${distFolder}/assets/img/svg/`,
    fonts: `${distFolder}/assets/fonts/`,
    libs: `${distFolder}/assets/libs/`,
  },
  src: {
    data: `${srcFolder}/data/`,
    html: `${srcFolder}/html/`,
    html_pages: `${srcFolder}/html/pages/`,
    html_components: `${srcFolder}/html/components/`,
    scss: `${srcFolder}/scss/`,
    scss_pages: `${srcFolder}/scss/pages/`,
    scss_components: `${srcFolder}/scss/components/`,
    js: `${srcFolder}/js/`,
    js_components: `${srcFolder}/js/components/`,
    js_pages: `${srcFolder}/js/pages/`,
    img: `${srcFolder}/img/`,
    img_pictures: `${srcFolder}/img/pictures/`,
    img_svg: `${srcFolder}/img/svg/`,
    fonts: `${srcFolder}/fonts/`,
    libs: `${srcFolder}/libs/`,
  },
  watch: {
    json: `${srcFolder}/data/**/*.json`,
    html: `${srcFolder}/html/**/*.{html,njk}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
  },
};
