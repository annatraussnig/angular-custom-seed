exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    'scenarios.js'
  ],
  baseUrl: 'http://localhost:8000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
