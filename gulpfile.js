const gulp = require('gulp');
const install = require('gulp-install');
const zip = require('gulp-zip');

const argv = require('yargs').argv;
const _D = argv.D;

const package = require('./package.json');
const buildname = (package.name).replace(/[^A-Za-z0-9_-]/g, '_');

gulp.task('install-dependancies', () => {
  return gulp.src('./package.json')
      .pipe(gulp.dest('./build'))
      .pipe(install({ production: true }));
});

gulp.task('build-zip', () => {
  return gulp.src('./build/**')
      .pipe(zip(`${buildname}.zip`))
      .pipe(gulp.dest('./dist'));
});

gulp.task('copy-artifact', () => {
  return gulp.src(`./dist/${buildname}.zip`)
      .pipe(gulp.dest(`./${_D}`));
});

gulp.task('default', ['install-dependancies', 'build-zip']);
