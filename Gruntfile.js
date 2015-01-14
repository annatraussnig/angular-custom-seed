module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-testem');
  grunt.loadNpmTasks('grunt-protractor-runner');

  grunt.initConfig({
    'http-server': {
      dev: {
        root: 'app',
        port: 8282,
        host: '127.0.0.1'
      },
      test: {
        root: 'app',
        port: 8000,
        host: '127.0.0.1'
      }
    },

    'jshint': {
      all: [
        'app/**/*.js',
        '!app/bower_components/**'
      ],
      options: {
        jasmine: true,
        browser: true,
        devel: true
      }
    },

    'testem': {
      unit: {
        options: {
          framework: 'jasmine2',
          launch_in_dev: ['PhantomJS'],
          launch_in_ci: ['PhantomJS'],
          before_tests: 'grunt jshint',
          serve_files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-resource/angular-resource.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/example-app.js',
            'app/example-app-controller.js',
            'app/example-app-controller_test.js'
          ],
          watch_files: [
            'app/**/*.js'
          ]
        }
      }
    },

    'protractor': {
      options: {
        noColor: false,
        args: {}
      },
      localrun: {
        configFile: 'integration_tests/protractor.conf.js'
      }
    }
  });
};
