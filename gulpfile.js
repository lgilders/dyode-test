const gulp = require('gulp');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-terser');

gulp.task('sass', function() {
    return gulp.src('./sass/styles.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename('styles.css'))
        .pipe(replace('"{{', '{{'))
        .pipe(replace('}}"', '}}'))
        .pipe(gulp.dest('./assets/'));
});

gulp.task('scripts', function() {
    return gulp.src('./scripts/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./assets/'))
        .pipe(rename('scripts.min.js'))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./assets/'));
});

gulp.task('default', function() {
    gulp.watch(['./sass/**/*.scss'], gulp.series(['sass']));
    gulp.watch(['./scripts/**/*.js'], gulp.series(['scripts']));
});