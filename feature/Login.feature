@Login
Feature: Login Action

  Scenario: Successful login with valid credentials
    Given : I am on home page
    When : I enter credentials and click ok
    Then : Login should happen with no errors
