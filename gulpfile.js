require('babel-core/register');
require('babel-polyfill');
require('typescript-require');
require('babel-preset-es2015');
require('babel-preset-stage-0');
require('babel-loader');

var gulp = require('gulp');
var gulpIf = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var gtb = require('gulp-typescript-babel');
var typescript = require('gulp-typescript');
var babel = require('gulp-babel');
var typedoc = require('gulp-typedoc');
var run = require('gulp-run');

var src = [
    "./src/**/*.ts",
    "./typings/main.d.ts",
    "./common/**/*.ts",
    "./data/**/*.ts",
    "!./build/**/*.*",
    "!./node_modules/**/*.ts",
    "!./typings/browser/**/*.ts",
    "!./typings/browser.d.ts"
];

gulp.task('default', function() {
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(typescript({
            removeComments: true,
            noImplicitAny: false,
            target: 'es6',
            module: 'commonjs'
        }))
        .pipe(babel({
            presets: ["es2015", "stage-0"]
        }))
        .pipe(sourcemaps.write('.', {
            sourceRoot: './src'
        }))
        .pipe(gulp.dest('./build'));
});


gulp.task('watch', function() {
    gulp.watch(src, ['default']);
});
