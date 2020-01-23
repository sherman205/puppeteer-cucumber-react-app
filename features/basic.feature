Feature: Contact form submission
  As a Developer
  I want users to fill out the contact form
  To reach out to the admin

  Scenario: Users able to submit contact form
    Given the user is on the contact form page
    When the user correctly fills out the contact form
    Then the form should be successfully submitted