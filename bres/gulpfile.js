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
// const uglify = require('gulp-uglify');
/* Tenser Es6 Friendly Uglify */
const uglify = require('gulp-uglify-es').default;

/* Tasks */
function css() {
    return src('./styles/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('./styles/'))
}
function js() {
    return src('./scripts/**/script.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('./scripts/'))
}

/* Pipelines */
exports.default = series(css);
exports.watch = function() {
    watch('./styles/**/*.scss', css);
    watch('./scripts/**/script.js', js);
}