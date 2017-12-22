const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
  gulp.src('/lib/SlackMessenger.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('/dist/SlackMessenger.babeled.js'))
);