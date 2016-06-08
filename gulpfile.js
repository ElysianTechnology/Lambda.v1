var gulp = require('gulp');
var octopack = require('@octopusdeploy/gulp-octo');
var del = require('del');

// Simple package into bin directory
gulp.task('pack', function() {
        del(['./*.zip']);
gulp.src(['./dist/**/*.*'], { base: './' })
        .pipe(octopack.pack('zip'))
        .pipe(gulp.dest('./'))
});