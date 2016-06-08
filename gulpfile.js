var gulp = require('gulp');
var octopack = require('@octopusdeploy/gulp-octo');

// Simple package into bin directory
gulp.task('pack', function() {
gulp.src(['./dist/**/*.*'], { base: './' })
        .pipe(octopack.pack('zip'))
        .pipe(gulp.dest('./'))
});