/**
 *  @fileOverview       gulp default task
 *  @usage              `gulp build`
 */

"use strict";


/**
 *  @description        Module dependencies
 */
var gulp = require('gulp');


// Default task spawns 'build' task
gulp.task('build', ['clean', 'jshint', 'browserify', 'markup']);