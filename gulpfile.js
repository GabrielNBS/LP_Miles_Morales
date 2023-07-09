const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function images () {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function videos() {
    return gulp.src('./src/video/*.mp4')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/video'));
}

function styles () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function scripts () {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

exports.default = gulp.parallel(images, styles, scripts, videos);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}