'use strict';

//Dependencies required
var gulp = require('gulp');

//Sass
var sass = require('gulp-sass');
var sourceMap = require('gulp-sourcemaps');
//MISC
var del = require('del');
var plumber = require('gulp-plumber');


// compile Sass files
gulp.task('sass', function(){
  gulp.src('src/styles/main.scss')
  .pipe(sourceMap.init())
    .pipe(plumber())
    // .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sass())
  .pipe(sourceMap.write())
  .pipe(gulp.dest('dist/styles/'))
})

gulp.task('clean', function() {
  del(['dist/styles/**.*']);
})

// Gulp defaut tasks
gulp.task('default', ['sass'], function(){
  console.log("Default gulp task *-*-*-*")
  gulp.watch('src/styles/**/*.scss', ['sass']);
});
