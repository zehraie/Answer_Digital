package com.answer.step_definitions;

import com.answer.pages.CheckBoxPage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class CheckBoxStepDefs {
    CheckBoxPage checkBoxPage = new CheckBoxPage();

    @When("the user can check one checkbox")
    public void the_user_can_check_one_checkbox() {
        checkBoxPage.checkbox1.click();
    }

    @Then("the user can see the the checkbox checked")
    public void the_user_can_see_the_the_checkbox_checked() {
        Assert.assertTrue(checkBoxPage.checkbox1.isSelected());
    }

    @When("the user can uncheck the other checkbox")
    public void the_user_can_uncheck_the_other_checkbox() {
        checkBoxPage.checkbox2.click();

    }

    @Then("the user can see the checkbox unchecked")
    public void the_user_can_see_the_checkbox_unchecked() {
        Assert.assertFalse("verify checkbox1 is NOT selected",checkBoxPage.checkbox2.isSelected());

    }

}
