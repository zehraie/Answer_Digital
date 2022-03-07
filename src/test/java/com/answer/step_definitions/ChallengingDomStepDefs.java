package com.answer.step_definitions;

import com.answer.pages.ChallengingDomPage;
import com.answer.pages.HomePage;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class ChallengingDomStepDefs  {

    ChallengingDomPage challengingDomPage = new ChallengingDomPage();

    @Then("the user can see {string} element on the screen")
    public void the_user_can_see_element_on_the_screen(String userChoice) {
        String actualuserChoice = challengingDomPage.userChoice.getText();
        Assert.assertEquals(userChoice,actualuserChoice);

    }
}
