const { src, dest, series, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const browserSync = require('browser-sync').create();

function buildSass() {
    return src('src/scss/**/*.scss')
    .pipe(sass({ includePaths: ['./node_modules'] }).on('error', sass.logError))
    .pipe(dest('src/css'))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

function buildHtml() {
    return src('src/**/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

function copy() {
    return src(['src/img/**/*.*'], { base: 'src' })
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

function cleanDist() {
    return del('dist');
}

function serve() {
    watch('src/scss/**/*.scss', buildSass);
    watch('src/**/*.html', buildHtml);
}

function createDevServer() {
    browserSync.init({
        server: 'src',
        //notify: false
    })
}

// exports.sass = buildSass;
// exports.html = buildHtml;
// exports.copy = copy;
// exports.cleanDist = cleanDist;

exports.build = series(cleanDist, buildSass, buildHtml, copy);
exports.default = series(buildSass, parallel(createDevServer, serve));