// const gulp = require('gulp'),
//       sass = require('gulp-sass'),
//       autoprefixer = require('gulp-autoprefixer');


// gulp.task('sass', () => {
//     gulp.src('scss/app.scss') // origen
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }) )
//         .pipe(sass({
//             includePaths: ['scss'] // nombre de la carpeta
//         }))
//         .pipe(gulp.dest('css')); // destino
// });


// gulp.task('watch', ['sass'], () => { // encadenada con la tare sass
//     gulp.watch(["scss/*.scss"], ['sass']);
// });
const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer');

function style() {
return (
    gulp
        .src('./scss/app.scss')
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest('./css/'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
);
}

function watch() {
return(
    gulp.
        watch('scss/*.scss', style)
);
}

exports.watch = watch;