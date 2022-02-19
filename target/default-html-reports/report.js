$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FormAuthentication.feature");
formatter.feature({
  "name": "Login page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Menu page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_is_on_the_Menu_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"form authentication\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_clicks_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the user can login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user enters valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_enters_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs out",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_logs_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_should_be_able_to_see_Login_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "User can not login with any invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters invalid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should see error \"Your username is invalid!\" message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "tomsmithh",
        "SuperSecretPassword!"
      ]
    },
    {
      "cells": [
        "tomsmit",
        "SuperSecretPassword!"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Menu page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_is_on_the_Menu_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"form authentication\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_clicks_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can not login with any invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"tomsmithh\" and valid \"SuperSecretPassword!\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.user_enters_invalid_and_valid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error \"Your username is invalid!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.user_should_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the Menu page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_is_on_the_Menu_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on \"form authentication\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_clicks_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User can not login with any invalid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user enters invalid \"tomsmit\" and valid \"SuperSecretPassword!\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.user_enters_invalid_and_valid(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see error \"Your username is invalid!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.user_should_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});