const { Given, When, Then } = require('cucumber');
const {
  openSignupPage,
  fillForm,
  checkFormSubmission
} = require('../support/basic');


Given('the user is on the signup form page', openSignupPage);

When('the user correctly fills out the form', fillForm);

Then('the form should be successfully submitted', checkFormSubmission);