/*---------------------------------------------
 * html CONFIGURATION TASK *
 *----------------------------------------------*/

/* Compile files *.html of our dev */


(function () {
    'use strict';

    module.exports = function (GULP, GLP, CONFIG, UTILS) {

        GULP.task(
            'html',
            'Compila nuestros archivos html. Compila en: ' + CONFIG.folderPaths.build.root,
            html
        );

        function html() {
            components();
            views();
        }
        function components() {
            return GULP.src([
                CONFIG.folderPaths.html.components + '/*.html'
            ])
                .pipe(GULP.dest(CONFIG.folderPaths.build.components));
        }
        function views() {
            return GULP.src([
                CONFIG.folderPaths.html.root + '/*.html',
                CONFIG.folderPaths.html.root + '/**'
            ])
                .pipe(GULP.dest(CONFIG.folderPaths.build.root));
        }
    };
})();