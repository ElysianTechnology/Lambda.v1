var gulp = require('gulp');
var octopack = require('@octopusdeploy/gulp-octo');

// Simple package into bin directory
gulp.task('pack', function() {
gulp.src(['./dist/**/*.*'], { base: './' })
        .pipe(octopack.pack('zip'))
        .pipe(octopack.push({host: 'http://elysiantech.co.uk:4000/', apiKey: 'API-BRAYV52V5WVOAI2ABNZGOR3CZWE', replace: true}, 
        function(err, result) {
     if(!err) {
        console.log("Package Pushed:" + body.Title + " v"+ body.Version +" (" + fileSizeString(body.PackageSizeBytes) +"nytes)"); 
        }}))
});