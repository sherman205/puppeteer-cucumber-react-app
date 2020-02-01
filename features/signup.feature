Feature: Signup form submission
  As a Developer
  I want users to fill out the signup form

  Scenario: Users able to submit signup form
    Given the user is on the signup form page
    When the user correctly fills out the form
    Then the form should be successfully submitted