// gulpfile.js

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

// 修改后的任务，合并 _assets/js 下的所有 JavaScript 文件
gulp.task('build:js', function () {
    return gulp.src([
        'assets/js/lunr/lunr-en.js',
        'assets/js/lunr/lunr-gr.js',
        'assets/js/lunr/lunr.js',
        'assets/js/lunr/lunr.min.js',
        'assets/js/vendor/**/*.js',
        'assets/js/plugins/**/*.js',
        'assets/js/_main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});



// 默认任务
gulp.task('default', gulp.series('build:js'));
