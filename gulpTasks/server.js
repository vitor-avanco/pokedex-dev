const gulp = require('gulp')

const watch = require('gulp-watch');
const webserver = require('gulp-webserver');


gulp.task('watch', () =>{
    gulp.watch('app/**/*.html' , () => gulp.start('app.html'));
    gulp.watch('app/sass/*.scss' , () => gulp.start('app.scss'));
    gulp.watch('app/**/*.css' , () => gulp.start('app.css'));
    gulp.watch('app/**/*.js' , () => gulp.start('app.js'));
    gulp.watch('assets/**/*.*' , () => gulp.start('app.assets'));
})

gulp.task('server', ['watch'], () => {
    return gulp.src('public').pipe( webserver ({
        livereload: true,
        port: 3000,
        open: true
    }))
})

gulp.task('default', ['server']);