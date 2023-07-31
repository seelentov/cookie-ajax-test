import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path ={
  build:{
    js: `${buildFolder}/js/`,
    xhr: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    php: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    files: `${buildFolder}/files/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src:{
    js: `${srcFolder}/js/app.js`,
    xhr: `${srcFolder}/js/xhr/xhr.js`,
    images: `${srcFolder}/img/**/*.{webp,jpg,jpeg,png,gif}`,
    svg: `${srcFolder}/img/**/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    php: `${srcFolder}/*.php`,
    files: `${srcFolder}/files/**/*.*`,
    svgicons: `${srcFolder}/svgicons/*.svg`,
  },
  watch:{
    js: `${srcFolder}/js/**/*.js`,
    xhr: `${srcFolder}/js/xhr/*.js`,
    images: `${srcFolder}/img/**/*.{svg,jpg,jpeg,png,gif,webp}`,
    scss: `${srcFolder}/scss/**/*.scss`,
    php: `${srcFolder}/**/*.php`,
    files: `${srcFolder}/files/**/*.*`,
    
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: `test`
}