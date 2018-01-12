const gulp = require('gulp');
const babel = require('gulp-babel');
const babelOptions = require('./.babelrc');
// const fs = require('fs');
// const babelOptions = JSON.parse(fs.readFileSync('./.babelrc', 'utf8'));

gulp.task('default', () => {
  return gulp.src(`./lib/SlackMessenger.js`)
      .pipe(babel(babelOptions))
      .pipe(gulp.dest('./dist'))
  }

);