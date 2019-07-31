/*---------------------------------------------
 * WATCH CONFIGURATION TASK *
 *----------------------------------------------*/

 /* Watchers for templates, scss and js. */

 (function(){

  'use strict';

  module.exports = function(GULP, GLP, CONFIG, UTILS){
    GULP.task(
      'watch',
      'Lanza el WATCH de: [scss, pug, scripts]',
      watch
    );
    
    
    function watch(){
      GULP.watch(CONFIG.folderPaths.scss + '**/*.scss', ['scss']).on('change', function() { changeText('SCSS') });
      GULP.watch(CONFIG.folderPaths.html.root + '**/*.html', ['html']).on('change', function() { changeText('HTML') });
      GULP.watch(CONFIG.folderPaths.js.root + '**/*.js', ['scripts']).on('change', function() { changeText('Scripts JS') });
    }
    
    function changeText(type) {
      console.log('Realizando cambios en ' + type);
    }
  };
})();