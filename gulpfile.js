var gulp                    = require( 'gulp' );
var sass                    = require( 'gulp-sass' );
var nunjucks                = require( 'gulp-nunjucks' );
var browserSync             = require( 'browser-sync' ).create();
var autoprefixer            = require( 'gulp-autoprefixer' );
var concat                  = require( 'gulp-concat' );


gulp.task('html', function() {
    return gulp.src('source/templates/*.html')
    .pipe(nunjucks.compile({name: 'Sindre'}))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({
        stream: true
    }) )
});

gulp.task('sass', function() {
    return gulp.src('source/scss/**/*.scss')
    .pipe( sass() )
    .pipe(autoprefixer({
        browsers: ['last 3 versions'],
        cascade: false
    }) )
    .pipe(gulp.dest('app/css') )
    .pipe(browserSync.reload({
        stream: true
    }) )
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

// gulp.task('vendor-js', function(){
//     return gulp.src([
//         'bower_components/jquery/dist/jquery.min.js',
//         'bower_components/protonet/jquery.inview/jquery.inview.min.js',
//         'bower_components/gsap/src/minified/TweenMax.min.js',
//         'bower_components/gsap/src/minified/plugins/ScrollToPlugin.min.js'
//     ])
//     .pipe( concat( 'vendor.js' ) )
//     .pipe( gulp.dest( 'app/js' ) );
// });

gulp.task('watch', function (){
    gulp.watch('source/scss/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('source/templates/*.html', ['html']);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('default', ['sass', 'html', 'watch', 'serve']);
