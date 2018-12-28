let gulp = require('gulp');
let pug = require('gulp-pug');
let stylus = require('gulp-stylus');
let data = require('gulp-data');
let fs = require('fs');
let babelCore = require('babel-core');
let babel = require('gulp-babel');
let browserify = require('gulp-browserify');
let eslint = require('gulp-eslint');


gulp.task('pug', function () {
  return gulp.src('app/pug/*.pug')
    .pipe(data(function(file){
      return JSON.parse(fs.readFileSync('app/data/data.json')
      );
    }))
    .pipe(pug())
    .pipe(gulp.dest('dist'))
});

gulp.task('stylus', function () {
  return gulp.src('./app/stylus/stylesheet.styl')
    .pipe(stylus())
    .pipe(gulp.dest('dist'));
});

gulp.task("scripts", function () {
  return gulp.src("app/js/main.js")
    .pipe(babel())
    .pipe(browserify())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['pug','stylus','scripts'], function()
{
  gulp.watch('app/pug/**/*.pug',['pug']);
  gulp.watch('app/data/**/*.json',['pug']);
  gulp.watch('app/stylus/**/*.styl',['stylus']);
  gulp.watch('app/js/**/*.js',['scripts']);
});
