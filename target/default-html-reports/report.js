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
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the Menu page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_is_on_the_Menu_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on \"Dropdown\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_clicks_on_link(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user click on dropdown button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user choses each option one by one",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user can see each following options",
  "rows": [
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});