package com.answer.step_definitions;

import com.answer.pages.KeyPressPage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class KeyPressStepDefs {
    KeyPressPage keyPress = new KeyPressPage();

    @When("the user clicks on any {string}")
    public void the_user_clicks_on_any(String key) {
        keyPress.keyInputBox.sendKeys(key);


    }

    @Then("the user can see the {string} text on web page")
    public void the_user_can_see_the_text_on_web_page(String string) {

    }

}
