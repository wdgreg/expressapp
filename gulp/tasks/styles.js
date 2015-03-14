var gulp         = require('gulp'),
    less         = require('gulp-less'),
    path         = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS    = require('gulp-minify-css'),
    rename       = require('gulp-rename'),
    gutil        = require('gulp-util');

// less for styling
gulp.task('styles', function() {
  'use strict';

  gutil.log('Compiling and minifying CSS...');
  return gulp.src('./source/less/styles.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(autoprefixer({
      browsers: ['last 3 versions', '> 1%', 'Firefox ESR', 'Opera 12.1']
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'));
});
