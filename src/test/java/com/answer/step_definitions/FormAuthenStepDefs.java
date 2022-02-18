package com.answer.step_definitions;

import com.answer.utilities.ConfigurationReader;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class FormAuthenStepDefs {
    String url = ConfigurationReader.get("url");

    @Given("the user is on the Menu page")
    public void the_user_is_on_the_Menu_page() {

    }

    @Given("the user clicks on {string} link")
    public void the_user_clicks_on_link(String string) {

    }

    @When("the user enters valid credentials")
    public void the_user_enters_valid_credentials() {

    }

    @Then("the user should be able to login")
    public void the_user_should_be_able_to_login() {

    }

    @When("the user logs out")
    public void the_user_logs_out() {

    }

    @Then("the user should be able to see Login Page")
    public void the_user_should_be_able_to_see_Login_Page() {

    }

    @When("user enters invalid {string} and {string}")
    public void user_enters_invalid_and(String string, String string2) {

    }

    @Then("user should see error {string} message")
    public void user_should_see_error_message(String string) {

    }

    @When("user enters valid {string} and invalid {string}")
    public void user_enters_valid_and_invalid(String string, String string2) {

    }

}
