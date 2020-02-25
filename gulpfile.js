'use strict';

// dependency requirements
var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    rename = require('gulp-rename'),
    csso = require('gulp-csso'),
	babelify = require('babelify'),
    browserify = require("browserify"),
    postcss    = require('gulp-postcss'),
    source = require("vinyl-source-stream");
    const buffer = require("vinyl-buffer");
    const uglify = require("gulp-uglify");
    const minify = require('gulp-minify');
    let cleanCSS = require('gulp-clean-css');




//SVG
    // Require package and theme information, set some variables.
    //const configFile = require('../themes.json');
    //const pkg = require('../package.json');
    //const {src, dest} = pkg.path;
    //const {themes} = configFile;

    // Require npm packages.
    const svgo = require('gulp-svgo');
    const svgstore = require('gulp-svgstore');
    const merge = require('merge-stream');




// Styles task
gulp.task('css', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
	.pipe(csso())
	.pipe( postcss([ require('precss'), require('autoprefixer') ]) )

    .pipe(rename('style.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))

    .pipe(gulp.dest('./'));
});

// Javascript  task



gulp.task('js', function() {
   return browserify({
        entries: ["./js/scripts.js"]
    })
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    //
    .pipe(source("build.js"))
    //.pipe(buffer())
    //.pipe(uglify())
    .pipe(gulp.dest("./dist"))
  ;
});

gulp.task('compress', function() {
  gulp.src(['dist/build.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist/build-min'))
});



// Watch tasks
gulp.task('watch', ['build'], function() {
    // styles
    gulp.watch(['./scss/**/*.scss'], [
        'css'
    ]);

    // js
    gulp.watch(['./js/**/*.js'], [
        'js'
    ]);
});


// Build indivindual icons into an icon sprite.
// Remove style elements and inline styles so we can style them with CSS.
gulp.task('icons', () => {

    return gulp.src('./src/icons/*.svg')
      .pipe(svgo({plugins: [{removeStyleElement: true}, {removeAttrs: {attrs: 'fill'}}]}))
      .pipe(rename({prefix: 'icon-'}))
      .pipe(svgstore())
      .pipe(gulp.dest('./icons/'));
  return merge(task);
});

// build task
gulp.task('build', ['css', 'js', 'icons']);

// default task
gulp.task('default', ['watch']);
