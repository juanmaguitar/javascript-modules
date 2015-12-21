var webpack = require("webpack");
var path = require("path");
//var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//var openBrowser = new OpenBrowserPlugin({ url: 'http://localhost:8080/webpack-dev-server/' });

module.exports = function(grunt) {

    require('time-grunt')(grunt);
    var devmode = grunt.option('dev');

    grunt.initConfig({

        srcFolder: 'src',
        baseFolder: '.',
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            static: ['dist/**/*.{css,js}'],
            html: ['dist/**/*.html', '!dist/google*.html']
        },

        sass: {
            options: {
                sourceMap: !!devmode,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'dist/css/style.css': 'src/scss/style.scss'
                }
            }
        },

        webpack: {
            dist: {
              entry: {
                  app: "./src/js/app.js",
                  page2: "./src/js/page2.js"
              },
              output: {
                  path: path.join(__dirname, "dist/js"),
                  publicPath: 'dist/js/',
                  filename: '[name].js'
              },
              module: {
                  loaders: [
                      {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel',
                        query: {
                          presets: ['es2015']
                        }
                      }
                  ]
              },
              plugins: [
                //commonsPlugin,
                //openBrowser,
                new webpack.NoErrorsPlugin()
              ]
          }
        },

        watch: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            all : {
              files: ['<%= srcFolder %>/**/*', 'Gruntfile.js'],
              tasks: ['build']
            },

            css: {
                files: ['src/**/*.scss'],
                tasks: ['buildCSS']
            },

            js: {
                files: ['src/js/**/*.js'],
                tasks: ['buildJS']
            }
        },

        connect: {
          options: {
            port: 8080,
            livereload: 35729,
            hostname: 'localhost'
          },
          livereload: {
            options: {
              open: true,
              base: '<%= baseFolder %>'
            }
          }
        }

    });

    // Use either of these two tasks, depending on whether you use less or scss
    grunt.registerTask('buildCSS', ['sass']);
    //grunt.registerTask('buildCSS', ['sass', 'pleeease']);

    // Use either of these two tasks, depending on whether you use RequireJS or WebPack

    grunt.registerTask('buildJS', [ 'webpack']);
    grunt.registerTask('build', ['clean', 'buildCSS', 'buildJS']);

    grunt.registerTask('serve', ['default','connect:livereload','watch:all']);
    grunt.registerTask('dev', ['build', 'connect', 'watch']);
    grunt.registerTask('default', ['build']);

    grunt.loadNpmTasks("gruntify-eslint");
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};