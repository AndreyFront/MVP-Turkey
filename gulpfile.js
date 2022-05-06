var gulp = require("gulp"),
    plumber = require("gulp-plumber"),
    watch = require('gulp-watch'),
    debug = require('gulp-debug'),
    sm = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    include = require('gulp-include'),
    /* Preprocessor */
    babel = require('gulp-babel'),
    pug = require("gulp-pug"),
    sass = require("gulp-sass"),
    // Minification
    cssmin = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    // SVG Sprite
    svg = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    // Livereload
    livereload = require('gulp-livereload'),
    http = require('http'),
    st = require('st'),
    // prefix
    autoprefixer = require('gulp-autoprefixer');

var path = {
    src: {
        html: './dev/pug/*.pug',
        css: {
            app: './dev/assets/scss/app.scss',
            inc: './dev/assets/scss/**/*.scss',
            vendor: './dev/assets/scss/vendor.scss'
        },
        js: {
            app: './dev/assets/js/app.js',
            vendor: './dev/assets/js/vendor.js',
        },
        images: {
            base: './dev/assets/images/**/*',
            fancybox: './node_modules/fancybox/dist/img/*.*',
            svg: './dev/assets/svg/**/*.svg'
        },
        fonts: {
            fts: '../dev/assets/fonts/*.*',
        }
    },
    dist: {
        html: './www/',
        css: './www/assets/css/',
        js: './www/assets/js/',
        images: './www/assets/images/',
        svg: './www/assets/images/svg/',
        fonts: {
            fts: './www/assets/css/fonts/'
        }
    }
}

function babelvendor() {
    return gulp.src(path.src.js.vendor)
        .pipe(plumber())
        .pipe(include())
        .pipe(sm.init())
        .pipe(babel({
            presets: ['latest']
        }))
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(sm.write('./'))
        .pipe(gulp.dest(path.dist.js))
}

function cssvendor() {
    return gulp.src(path.src.css.vendor)
        .pipe(plumber())
        .pipe(sm.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        // .pipe(cssmin())
        .pipe(sm.write('./'))
        .pipe(gulp.dest(path.dist.css))
}

function fontsfts() {
    return gulp.src(path.src.fonts.fts)
        .pipe(gulp.dest(path.dist.fonts.fts));
}

function images() {
    return gulp.src([path.src.images.base])
        .pipe(gulp.dest(path.dist.images))
}

function imagessvg() {
    return gulp.src([
        path.src.images.svg,
    ]).pipe(gulp.dest(path.dist.svg));
}

function compilejs() {
    return gulp.src(path.src.js.app)
        .pipe(plumber())
        .pipe(sm.init())
        .pipe(babel({
            presets: ['latest']
        }))
        .pipe(concat('app.js'))
        .pipe(sm.write('./'))
        .pipe(gulp.dest(path.dist.js))
}

function compilesass() {
    return gulp.src(path.src.css.app)
        .pipe(plumber())
        .pipe(sm.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sm.write('./'))
        .pipe(gulp.dest(path.dist.css))
}

function compilepug() {
    return gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(path.dist.html))
}

function createsvg() {
    return gulp.src(path.src.images.svg)
        .pipe(plumber())
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            parserOptions: {
                xmlMode: true
            }
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svg({
            layout: 'diagonal',
            mode: {
                symbol: {
                    sprite: "../sprite.symbol.svg",
                },
                css: {
                    dest: './',
                    dimensions: '-x',
                    sprite: './sprite.css.svg',
                    render: {
                        css: true
                    }
                }
            }
        }))
        .pipe(gulp.dest(path.dist.svg))
}

let build = gulp.series(babelvendor, cssvendor, fontsfts, images, imagessvg, compilejs, compilesass, compilepug, createsvg);

/**  PRECOMPILE TASK  **/

gulp.task('babel:vendor', babelvendor);

gulp.task('css:vendor', cssvendor);

gulp.task('fonts:fts', fontsfts);

gulp.task('images', images);

gulp.task('images:svg', imagessvg);

gulp.task('babel', compilejs);

gulp.task('sass', compilesass);

gulp.task('pug', compilepug);

gulp.task('svg', createsvg);

gulp.task('build', build);

gulp.task('watch', watch);

gulp.task('default', gulp.series(build, (done) => {
    gulp.watch(path.src.js.app, gulp.series(compilejs));
    gulp.watch(path.src.js.vendor, gulp.series(babelvendor));
    gulp.watch([path.src.css.app, path.src.css.inc], gulp.series(compilesass));
    gulp.watch(path.src.css.vendor, gulp.series(cssvendor));
    gulp.watch(['./dev/pug/**/*'], gulp.series(compilepug));
    gulp.watch([path.src.images.base], gulp.series(images));
    gulp.watch(path.src.images.svg, gulp.series(createsvg));
    gulp.watch(path.src.images.svg, gulp.series(imagessvg));
    done()
}));