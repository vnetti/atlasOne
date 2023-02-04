// Получаем имя папки проекта 
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        html: `${srcFolder}/**/[^_]*.html`,
        files: `${srcFolder}/files/**/*.*`,
        scss: `${srcFolder}/scss/style.scss`,
        css: `${srcFolder}/css/`,
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,ico,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgicons: `${srcFolder}/svgicons/**/*.svg`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        svgicons: `${srcFolder}/svgicons/**/*.svg`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: "domains/f0768447.xsph.ru/public_html/"
}