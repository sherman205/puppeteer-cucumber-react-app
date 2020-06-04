var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: process.env.SERVICE_ENDPOINT ? 'test-output/cucumber.json' : 'cucumber.json',
  output: process.env.SERVICE_ENDPOINT ? 'test-output/cucumber.html' : 'cucumber.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
}

reporter.generate(options);