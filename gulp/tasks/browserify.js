var gulp        = require('gulp');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');

gulp.task('browserify', function() {
    browserify('./src/js/index.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('build/js'))
});