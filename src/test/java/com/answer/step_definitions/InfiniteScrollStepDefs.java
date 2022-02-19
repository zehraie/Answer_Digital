package com.answer.step_definitions;

import com.answer.pages.InfinitScrollPage;
import io.cucumber.java.bs.A;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;

public class InfiniteScrollStepDefs {
      InfinitScrollPage infinitScrollPage = new InfinitScrollPage();

    @When("the user scroll to the bottom of the pape twice")
    public void the_user_scroll_to_the_bottom_of_the_pape_twice() {
//        JavascriptExecutor jse = (JavascriptExecutor) driver;
//
//        for (int i = 0; i < 2; i++) {    //ten times will scroll down
//            Thread.sleep(2000);      // to see very well put wait otherwise you do not need it
//            jse.executeScript("window.scrollBy(0,500)");
//        }

    }

    @Then("the user shouldn't see the {string} title")
    public void the_user_shouldn_t_see_the_title(String infiScroll) {
       Assert.assertFalse(infinitScrollPage.infintScrollTitle.isDisplayed());

    }

    @Then("the user scrolls back to top of the page")
    public void the_user_scrolls_back_to_top_of_the_page() {
//        JavascriptExecutor jse= (JavascriptExecutor) driver;
//        jse.executeScript("arguments[0].scrollIntoView(true);",infintScrollTitle);

    }

    @Then("the user can see {string} title")
    public void the_user_can_see_title(String infiScroll) {
        Assert.assertTrue(infinitScrollPage.infintScrollTitle.isDisplayed());
    }



}
