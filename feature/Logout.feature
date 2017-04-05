@Login
Feature: Logout  Action

  Scenario: Error message with invalid credentials
    Given : I am on home page
    When : I enter credentials and click ok
    Then : Login should happen with no errors
