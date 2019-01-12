'use strict';

const   gulp = require('gulp'),
        del = require('del'),
        htmlmin = require('gulp-htmlmin'),
        less = require('gulp-less'),
        uglify = require('gulp-uglify-es').default,
        path = require('path'),
        bs = require('browser-sync').create();

//Cleaning Tasks
gulp.task('clean', () => del(['public']));

//Task
gulp.task('less', () =>
    gulp.src('./assets/styles/**/app.less')
    .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(bs.reload({stream: true}))
);
gulp.task('scripts', () => 
    gulp.src('./assets/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
    .pipe(bs.reload({stream: true}))
);
gulp.task('pages', () =>
    gulp.src(['./**/*.html'])
    .pipe(htmlmin({
        collapseWhitespace: true, removeComments: true
    }))
    .pipe(gulp.dest('./public'))
);

//Watchers For Dev
gulp.task('watch-and-serve', () => {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./assets/styles/**/*.less', gulp.parallel('less'));
    gulp.watch('./assets/js/**/*.js', gulp.parallel('scripts'));
    gulp.watch("./**/*.html").on('change', bs.reload);
}); 

//The main gulp command for building
gulp.task('default', gulp.parallel('less','scripts','pages'));
