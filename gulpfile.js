const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const minifyHtml = require("gulp-minify-html");
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');


const dist = 'dist'

gulp.task('sass',  () => {
    return gulp.src('./src/sass/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(concat('style.css'))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('js', () => {
    return gulp.src('./src/js/*.js') 
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function () {
    return gulp.src('./src/*html') 
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist'));
});

gulp.task('image', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('default', [ 'sass:watch','sass','js','html', 'image'])


