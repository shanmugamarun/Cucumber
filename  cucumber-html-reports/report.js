$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Simple/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": ": I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": ": I enter credentials and click ok",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": ": Login should happen with no errors",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.java:13"
});
formatter.result({
  "duration": 1095651108,
  "status": "passed"
});
formatter.match({
  "location": "Login.java:18"
});
formatter.result({
  "duration": 93739,
  "status": "passed"
});
formatter.match({
  "location": "Login.java:23"
});
formatter.result({
  "duration": 80820,
  "status": "passed"
});
formatter.uri("Simple/Logout.feature");
formatter.feature({
  "line": 1,
  "name": "Logout of an application",
  "description": "",
  "id": "logout-of-an-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Logout functionality",
  "description": "",
  "id": "logout-of-an-application;logout-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter Username as \"\u003cusername\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "logout-of-an-application;logout-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7,
      "id": "logout-of-an-application;logout-functionality;;1"
    },
    {
      "cells": [
        "username1",
        "password1"
      ],
      "line": 8,
      "id": "logout-of-an-application;logout-functionality;;2"
    },
    {
      "cells": [
        "username2",
        "password2"
      ],
      "line": 9,
      "id": "logout-of-an-application;logout-functionality;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "Logout functionality",
  "description": "",
  "id": "logout-of-an-application;logout-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter Username as \"username1\" and Password as \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "Logout.java:13"
});
formatter.result({
  "duration": 234648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 21
    },
    {
      "val": "password1",
      "offset": 49
    }
  ],
  "location": "Logout.java:18"
});
formatter.result({
  "duration": 27368204,
  "status": "passed"
});
formatter.match({
  "location": "Logout.java:25"
});
formatter.result({
  "duration": 128591,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Logout functionality",
  "description": "",
  "id": "logout-of-an-application;logout-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "user navigates to application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter Username as \"username2\" and Password as \"password2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "Logout.java:13"
});
formatter.result({
  "duration": 56183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username2",
      "offset": 21
    },
    {
      "val": "password2",
      "offset": 49
    }
  ],
  "location": "Logout.java:18"
});
formatter.result({
  "duration": 123784,
  "status": "passed"
});
formatter.match({
  "location": "Logout.java:25"
});
formatter.result({
  "duration": 72407,
  "status": "passed"
});
});