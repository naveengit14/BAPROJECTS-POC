]
   karma.conf.js C:\Users\n456485\Documents\UserStory1-ResponsiveDP\UserStory1-ResponsiveDP\node_modules\.bin\karma.conf.js    2   C:\Users\n456485\AppData\Local\Temp\karma.conf.js H  // Karma configuration
// Generated on Thu Apr 07 2016 06:45:28 GMT+0100 (GMT Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'C:/Users/xxxx/Documents/UserStory1-ResponsiveDP/UserStory1-ResponsiveDP/src/*.js',
      'C:/Users/xxxx/Documents/UserStory1-ResponsiveDP/UserStory1-ResponsiveDP/spec/*.js',
    ],


    // list of files to exclude
    exclude: [ ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 'C:/Users/n456485/Documents/UserStory1-ResponsiveDP/UserStory1-ResponsiveDP/src/*.js': ['coverage'] },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage' ],

    coverageReporter: {
      type: 'html',
      dir: 'C:/Users/xxxx/Documents/UserStory1-ResponsiveDP/UserStory1-ResponsiveDP/test/reports/unit/coverage'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher

    browsers: ['Chrome'],
    // Continuous Integration mode
    // if true