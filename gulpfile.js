'use strict';

const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const del = require('del');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const runSequence = require('run-sequence');
const less = require('gulp-less');
const uglify = require('gulp-uglify-es').default;
const path = require('path');

const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.0',
    'bb >= 10'
];


gulp.task('clean', () => del(['public']));

gulp.task('less', () =>
    gulp.src('./assets/styles/**/app.less')
    .pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
    .pipe(gulp.dest('./public/css'))
);

gulp.task('scripts', () => 
    gulp.src('./assets/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
);

gulp.task('pages', () =>
    gulp.src(['./**/*.html'])
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('./public'))
);

gulp.task('default', gulp.parallel('less','scripts','pages'));