'use strict';
/* Gulp */
const { series, src, dest, watch } = require('gulp');
/* Sass */
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
/* Clean Css (Minify) */
const cleanCSS = require('gulp-clean-css');
/* Gulp Rename */
const rename = require('gulp-rename');
/* Js3 Uglify */
const uglify = require('gulp-uglify');

/* Tasks */
function css() {
    return src('./assets/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('public/css/'))
}
function js() {
    return src('./assets/js/**/*.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('public/js/'))
}

/* Pipelines */
exports.default = series(css);
exports.watch = function() {
    watch('./assets/scss/**/*.scss', css);
    watch('./assets/js/**/*.js', js);
}