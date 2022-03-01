$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Dropdown.feature");
formatter.feature({
  "name": "Key Presses page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
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
  "name": "the user clicks on \"Dropdown\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_clicks_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on dropdown button",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.DropdownStepDefs.the_user_click_on_dropdown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user choses each option one by one",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.DropdownStepDefs.the_user_choses_each_option_one_by_one()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can see each following options",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.DropdownStepDefs.the_user_can_see_each_following_options(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat com.answer.step_definitions.DropdownStepDefs.the_user_can_see_each_following_options(DropdownStepDefs.java:30)\r\n\tat ✽.the user can see each following options(file:///C:/Users/HP/IdeaProjects/Answer_Digital/src/test/resources/features/Dropdown.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});