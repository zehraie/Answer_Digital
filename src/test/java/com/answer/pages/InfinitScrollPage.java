package com.answer.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class InfinitScrollPage extends HomePage {

    @FindBy(xpath = "//h3")
    public WebElement infintScrollTitle;

}
