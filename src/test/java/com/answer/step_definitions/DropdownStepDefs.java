package com.answer.step_definitions;

import com.answer.pages.DropdownPage;
import com.answer.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class DropdownStepDefs {
    DropdownPage dropdownPage = new DropdownPage();
    List<String> actualOptions;

    @When("the user click on dropdown button")
    public void the_user_click_on_dropdown_button() throws InterruptedException {
        dropdownPage.dropDownBox.click();
        Thread.sleep(9000);

    }

    @When("the user can see default option {string}")
    public void the_user_can_see_default_option(String defaultOption) {
      Assert.assertEquals(defaultOption,dropdownPage.getFirtSelectedOption().getText());
    }

    @Then("the user can see each following options")
    public void the_user_can_see_each_following_options(List<String> options) {
        List<String> actualOptions = BrowserUtils.getElementsText(dropdownPage.getOptions());
        Assert.assertTrue(actualOptions.containsAll(options));
    }





















//    @When("the user click on dropdown button")
//    public void the_user_click_on_dropdown_button() throws InterruptedException {
//
//    }

//    @When("the user choses each option one by one")
//    public void the_user_choses_each_option_one_by_one() {
//
//        List<String> actualOptions = BrowserUtils.getElementsText(dropdownPage.getOptions());
//        System.out.println("actualOptions = " + actualOptions);
//        Assert.assertTrue(actualOptions.contains(options));
//    }
//
//    @Then("the user can see each following options")
//    public void the_user_can_see_each_following_options(List<String> options) {
//        for (String actualOption : actualOptions) {
//            Assert.assertTrue(actualOptions.contains(options));
//
//        }


   // }

}



