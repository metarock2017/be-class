var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');

var reload = browserSync.reload;

var files = {
    src: {
        js: './src/js/*.js',
        css: './src/styles/*.css',
        less: './src/less/*.less'
    },
    dist: {
        js: './dist/js/',
        css: './dist/styles',
        less: './dist/less'
    }
}

// gulp.task('default', function() {
//     console.log('Hello World!');
// });

gulp.task('compress', function() {
    gulp.src(files.src.js)
        .pipe(uglify())
        .pipe(gulp.dest(files.dist.js))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('cssmin', function() {
    gulp.src(files.src.css)
        .pipe(cssmin())
        .pipe(gulp.dest(files.dist.css))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('less', function() {
    gulp.src(files.src.less)
        .pipe(less())
        .pipe(gulp.dest(files.dist.css))
        .pipe(reload({
            stream: true
        }));
})

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: './dist'
        }
    })

    gulp.watch(files.src.js, ['compress']);
    gulp.watch(files.src.css, ['cssmin']);
    gulp.watch(files.src.less, ['less']);
});

gulp.task('auto', function() {
    gulp.watch(files.src.js, ['compress']);
    gulp.watch(files.src.css, ['cssmin']);
    gulp.watch(files.src.less, ['less']);
});

gulp.task('default', ['auto']);