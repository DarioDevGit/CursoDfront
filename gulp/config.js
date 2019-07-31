/*********************************************
 * GULP's configuration
 *********************************************/

(function(){
    'use strict';
    module.exports = projectConfig();

    function projectConfig(){
        var d = new Date();
        var date = d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2) + '/';
        return {
            folderPaths: {
                root: './src',
                rootServer: './build/',
                assets: {
                    root: './src/assets/',
                    fonts: './src/assets/fonts/',
                    img: './src/assets/img/',
                    media: './src/assets/media/',
                },
                html: {
                    root: './src/views/',
                    components: './src/components/'
                },
                pug: {
                    root: './src/pug/',
                    views: './src/pug/views/'
                },
                scss: './src/scss/',
                js: {
                    root: './src/js/',
                    components: './src/js/components/',
                    utilities: './src/js/utilities/',
                    classes: './src/js/classes/',
                    data: './src/js/data/'
                },
                angular: {
                    root: './src/app',
                    components: './src/app/components',
                    config: './src/app/config',
                    services: './src/app/services',
                    utilities: './src/app/utilities',
                    views: './src/app/views'
                },
                build: {
                    root: './build/',
                    css: './build/css/',
                    js: './build/js/',
                    assets: './build/assets/',
                    libs: './build/libs/',
                    components: './build/components/'
                },
                gulp: './gulp/',
                task: './task/'
            },
            files: {
                angularApp: 'app',
                jsDev: 'front-dev',
                jsDevMain: 'main-dev',
                jsConfig: 'config',
                jsConcatAll: 'front',
                jsConcatAllMain: 'main',
                libsConcatJsAll: 'dependencies',
                libsConcatCSSAll: 'dependencies'
            },
            libs: {
                requiredJS: [
                    // './node_modules/underscore/underscore-min.js'
                ],
                requiredCSS: []
            },
            tasksConfig: {
                scss: {
                    optScss: {
                        outputStyle: 'extend'
                    },
                    autoprefix: {
                        browsers  : ['last 2 versions', 'ie 8'],
                        cascade   : false
                    },
                    pixrem: {
                        atrules: true,
                        browsers: 'ie <= 8'
                    }
                },
                pug: {},
                angular: {},
                serve: {
                    port: 8000,
                    livereload: true,
                    directoryListing: {
                        enable: true,
                        path: './build/'
                    },
                    open: true
                }
            },
			thisDay: date
		}
    }
})();