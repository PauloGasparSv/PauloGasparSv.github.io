'use strict';

const   gulp = require('gulp'),
        autoprefixer = require('gulp-autoprefixer'),
        csso = require('gulp-csso'),
        del = require('del'),
        htmlmin = require('gulp-htmlmin'),
        runSequence = require('run-sequence'),
        less = require('gulp-less'),
        uglify = require('gulp-uglify-es').default,
        path = require('path');

//Added this just because
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

//Cleaning Tasks
gulp.task('clean', () => del(['public']));

//Task
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

//Watchers For Dev
gulp.task('watch', () => {
    gulp.watch('./assets/styles/**/*.less', gulp.parallel('less'));
    gulp.watch('./assets/js/**/*.js', gulp.parallel('scripts'));
});

//The main gulp command for building
gulp.task('default', gulp.parallel('less','scripts','pages'));
