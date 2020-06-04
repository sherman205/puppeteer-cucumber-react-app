const { Given, When, Then } = require('cucumber');
const {
  checkHome,
  fillForm,
  checkFormSubmission
} = require('../support/basic');


Given('the user is on the signup form page', checkHome);

When('the user correctly fills out the form', fillForm);

Then('the form should be successfully submitted', checkFormSubmission);