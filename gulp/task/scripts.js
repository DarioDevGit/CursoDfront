/*---------------------------------------------
 * SCRIPTS JS CONFIGURATION TASK *
 *----------------------------------------------*/

/* Concat *.js files, output -> build/js/ */


(function () {
  'use strict';

  module.exports = function (GULP, GLP, CONFIG, UTILS) {
    GULP.task(
      'scripts',
      'Concatena archivos Js. Genera: ' + CONFIG.folderPaths.build.js + CONFIG.files.jsConcatAll,
      scripts
    );


    function scripts() {
      return GULP.src([
        GLP.path.join(CONFIG.folderPaths.js.root, CONFIG.files.jsConfig) + '.js',
        CONFIG.folderPaths.js.utilities + '**/*.js',
        CONFIG.folderPaths.js.classes + '**/*.js',
        CONFIG.folderPaths.js.components + '**/*.js',
        GLP.path.join(CONFIG.folderPaths.js.root, CONFIG.files.jsDev) + '.js'
      ])
        .pipe(GLP.concat(CONFIG.files.jsConcatAll + '.js'))
        .pipe(GLP.eslint())
        .pipe(GLP.eslint.format())
        .pipe(GULP.dest(CONFIG.folderPaths.build.js));
    }
  };
})();