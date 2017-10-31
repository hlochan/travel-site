var gulp    = require('gulp'),
    postcss = require('gulp-postcss'),
    simpleVars = require('postcss-simple-vars'),
    autoprefixer = require('autoprefixer'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('styles', function(){
  //taking the content of css files and outputting it into a brand new code
  //gulp.src(), gulp.dest(), PostCSSfilters , gulp.pipe();
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, autoprefixer, simpleVars, nested]))
    .on('error', function(errorInfo){
      //continue the stream
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
