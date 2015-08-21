'use strict';

var gulp       = require('gulp'),
	debug      = require('gulp-debug'),
	inject     = require('gulp-inject'),
	tsc        = require('gulp-typescript'),
	sourcemaps = require('gulp-sourcemaps'),	
	handlebars = require('gulp-handlebars'),
	wrap       = require('gulp-wrap'),
	declare    = require('gulp-declare'),
	concat     = require('gulp-concat'),
	Config     = require('./gulpfile.config'),
	sass       = require('gulp-ruby-sass'),
	minifyCss  = require('gulp-minify-css'),
	uglify     = require('gulp-uglify'),
	config     = new Config();


function tsRefs(){
	var target  = gulp.src( config.tsRefs ),
		sources = gulp.src( [ config.tsPath ], {read: false} );

	return target
	.pipe(inject(sources, {
		starttag  : '//{',
		endtag    : '//}',
		transform : function( filepath ){
			return '/// <reference path="../..' + filepath + '" />';
		}
	}))
	.pipe(gulp.dest(config.typings));
};

function compile(){
	var sourcets = [config.tsPath, config.libts, config.tsRefs ],
		tsResult = gulp
			.src( sourcets )
			.pipe( sourcemaps.init() )
			.pipe(tsc({
				target            : 'ES5',
				declarationFiles  : false,
				noExternalResolve : true
			}));

	tsResult.dts.pipe( gulp.dest(config.scriptsPath) );
	return tsResult
		.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.scriptsPath));
};

gulp.task('tpl', function(){
  gulp.src('hbs/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'TPLS.templates',
      noRedeclare: true,
    }))
    .pipe(concat('ztemplates.js'))
    .pipe(gulp.dest( 'js' ));
});

gulp.task('sass', function () {
    return sass('sass')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
    	.pipe(minifyCss({compatibility: 'ie8'}))
    	.pipe(concat('app.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('concat-js', function() {
  return gulp.src(['vendor/**/*.js','js/**/*.js'])
  	.pipe( sourcemaps.init() )
    .pipe(uglify({mangle:false}))
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('ts-refs', tsRefs);
gulp.task('ts-comp', compile);
gulp.task('default', ['tpl','ts-refs','ts-comp','concat-js','sass']);