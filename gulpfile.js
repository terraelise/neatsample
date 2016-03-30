"use strict";

var gulp = require("gulp"), 
    sass = require("gulp-sass"),
    bourbon = require("node-bourbon").includePaths,
    neat = require("node-neat").includePaths,
    minifycss = require("gulp-minify-css"),
    rename = require("gulp-rename");
    //browserSync = require("browser-sync");

gulp.task("sass", function() {
  gulp.src("src/scss/**/*.scss")
      .pipe(sass({
        includePaths: bourbon,
        includePaths: neat
      }))
      .pipe(gulp.dest("dist/css"))
      .pipe(rename({suffix: ".min"}))
      .pipe(minifycss())
      .pipe(gulp.dest("dist/css"))
      //.pipe(browserSync.reload({
      //  stream: true
      //}))
});

//gulp.task("browserSync", function() {
//  browserSync({
//    server: {
//      baseDir: "dist"
//    }
//  })
//});

// Compiles all gulp tasks   "browserSync", 
gulp.task("default", ["sass"], function() {
  gulp.watch("src/scss/**/*.scss", ["sass"]);
  //gulp.watch("dist/*.html").on("change", browserSync.reload);
});
