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
  "name": "the user clicks on \"Form Authentication\" link",
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
formatter.uri("file:src/test/resources/features/InfiniteScroll.feature");
formatter.feature({
  "name": "Infinite Scroll page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "the user can scroll down and up",
  "description": "",
  "keyword": "Scenario"
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
  "name": "the user clicks on \"Infinite Scroll\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_clicks_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user scroll to the bottom of the pape twice",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.InfiniteScrollStepDefs.the_user_scroll_to_the_bottom_of_the_pape_twice()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user shouldn\u0027t see the Infinite Scroll title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.InfiniteScrollStepDefs.the_user_shouldn_t_see_the_Infinite_Scroll_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user scrolls back to top of the page",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.InfiniteScrollStepDefs.the_user_scrolls_back_to_top_of_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can see Infinite Scroll title",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.InfiniteScrollStepDefs.the_user_can_see_Infinite_Scroll_title()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/KeyPress.feature");
formatter.feature({
  "name": "Key Presses page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "the user can click the key",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the Menu page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user clicks on \"Key Presses\" link",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks on any \"\u003ckey\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user can see the \"\u003cexpectedKey\u003e\" text on web page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "key",
        "expectedKey"
      ]
    },
    {
      "cells": [
        "3",
        "3"
      ]
    },
    {
      "cells": [
        "h",
        "H"
      ]
    },
    {
      "cells": [
        "k",
        "K"
      ]
    },
    {
      "cells": [
        "/",
        "SLASH"
      ]
    }
  ]
});
formatter.scenario({
  "name": "the user can click the key",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "the user clicks on \"Key Presses\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_clicks_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on any \"3\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.KeyPressStepDefs.the_user_clicks_on_any(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can see the \"3\" text on web page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.KeyPressStepDefs.the_user_can_see_the_text_on_web_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "the user can click the key",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "the user clicks on \"Key Presses\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_clicks_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on any \"h\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.KeyPressStepDefs.the_user_clicks_on_any(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can see the \"H\" text on web page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.KeyPressStepDefs.the_user_can_see_the_text_on_web_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "the user can click the key",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "the user clicks on \"Key Presses\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_clicks_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on any \"k\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.KeyPressStepDefs.the_user_clicks_on_any(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can see the \"K\" text on web page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.KeyPressStepDefs.the_user_can_see_the_text_on_web_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "the user can click the key",
  "description": "",
  "keyword": "Scenario Outline"
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
  "name": "the user clicks on \"Key Presses\" link",
  "keyword": "And "
});
formatter.match({
  "location": "com.answer.step_definitions.FormAuthenStepDefs.the_user_clicks_on_link(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on any \"/\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.answer.step_definitions.KeyPressStepDefs.the_user_clicks_on_any(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user can see the \"SLASH\" text on web page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.answer.step_definitions.KeyPressStepDefs.the_user_can_see_the_text_on_web_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});