'use strict'

var asar = require('asar');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var changed = require('gulp-changed');
var copy = require('gulp-copy');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var shell = require('gulp-shell');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

var o = {
  scss: 'app/styles/*.scss',
  distJs: 'dist/app/js',
  distCss: 'dist/app/css'
};

gulp.task('clean', function (cb) {
  del(['dist'], cb);
});

gulp.task('copy', function () {
  return gulp.src(['app/index.html', 'app/index.js', 'package.json', 'app/app.js', 'config.json'])
    .pipe(gulp.dest('dist/app'));
});

gulp.task('asar', function () {
  return asar.createPackage('dist/app/', 'dist/app.asar', function () {
  })
});

gulp.task('styles', function () {
  return gulp.src(o.scss)
    .pipe(changed(o.distCss))
    .pipe(sass({
      errLogToConsole: true,
      includePaths: require('node-neat').with('node-bourbon')
    }))
    .on('error', notify.onError())
    .pipe(csso())
    .pipe(gulp.dest(o.distCss));
});

gulp.task('browserSync', function () {
  var bs = browserSync.create();
  bs.watch("app/**/*").on("change", function () {
    gulp.start(['copy', 'styles']);
  });
});

gulp.task('electron', shell.task([
  './node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron dist/app'
]));

gulp.task('watch', ['clean'], function () {
  gulp.start(['copy', 'styles', 'browserSync', 'electron']);
});

gulp.task('build', ['clean'], function () {
  process.env.NODE_ENV = 'production';
  gulp.start(['copy', 'styles', 'asar']);
});

gulp.task('default', function () {
  console.log('Run `gulp watch` or `gulp build`');
});

