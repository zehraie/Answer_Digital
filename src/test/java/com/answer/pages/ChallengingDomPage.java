package com.answer.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ChallengingDomPage extends HomePage{
    @FindBy(xpath = "//tbody/tr[4]/td[3]")
    public WebElement userChoice;
}
