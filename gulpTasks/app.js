const gulp = require('gulp');
const babel = require('gulp-babel');

const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

const htmlmin = require('gulp-htmlmin');

gulp.task('app', ['app.html', 'app.scss', 'app.css', 'app.js', 'app.assets'])

gulp.task('app.html', function(){
    return gulp.src('app/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('public'))
})

gulp.task('app.scss', function () {
    return gulp.src('app/sass/style.scss')
     .pipe(sourcemaps.init())
     .pipe(sass().on('error', sass.logError))
     .pipe(sourcemaps.write())
     .pipe(concat('style.min.css'))
     .pipe(gulp.dest('public/assets/css'));
});

gulp.task('app.css', function(){
    return gulp.src('app/css/*.css')
    .pipe(uglifycss())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/assets/css'));
})


gulp.task('app.js', function(){
    return gulp.src('app/**/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('public/assets/js'));
})

gulp.task('app.assets', function(){
    return gulp.src('assets/**/*.*')
    .pipe(gulp.dest('public/assets'));
})