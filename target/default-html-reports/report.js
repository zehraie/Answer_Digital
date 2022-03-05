$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CheckBox.feature");
formatter.feature({
  "name": "CheckBox page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "the user clicks Dropdown button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
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
  "name": "the user clicks on \"Checkboxes\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_clicks_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can check one checkbox",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.CheckBoxStepDefs.the_user_can_check_one_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can see the the checkbox checked",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.CheckBoxStepDefs.the_user_can_see_the_the_checkbox_checked()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can uncheck the other checkbox",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.CheckBoxStepDefs.the_user_can_uncheck_the_other_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can see the checkbox unchecked",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.CheckBoxStepDefs.the_user_can_see_the_checkbox_unchecked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});