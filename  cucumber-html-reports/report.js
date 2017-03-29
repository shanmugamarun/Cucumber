$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
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
  "duration": 578410330,
  "status": "passed"
});
formatter.match({
  "location": "Login.java:18"
});
formatter.result({
  "duration": 42663,
  "status": "passed"
});
formatter.match({
  "location": "Login.java:23"
});
formatter.result({
  "duration": 52578,
  "status": "passed"
});
});