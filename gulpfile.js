var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function () {
    browserSync.init({
        watch: true,
        server: {
            baseDir: "./"
        }
    });
});