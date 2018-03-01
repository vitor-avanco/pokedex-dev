const gulp = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence');

require('./gulpTasks/app');
require('./gulpTasks/dependencias');
require('./gulpTasks/server');

gulp.task('default', () => {
    if(util.env.production){
        sequence('dependencias', 'app' )
    }else{
        sequence('dependencias', 'app', 'server')
    }
})

