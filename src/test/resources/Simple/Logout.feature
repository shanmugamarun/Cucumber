Feature: Logout of an application
  Scenario Outline: Logout functionality
    Given  user navigates to application
    When I enter Username as "<username>" and Password as "<password>"
    Then login should be unsuccessful
    Examples:
      | username  | password  |
      | username1 | password1 |
      | username2 | password2 |



