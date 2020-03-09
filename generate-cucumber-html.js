var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber.json',
  output: 'cucumber.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
}

reporter.generate(options);