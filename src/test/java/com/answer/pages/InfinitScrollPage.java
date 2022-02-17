package com.answer.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class InfinitScrollPage extends BasePage {

    @FindBy(xpath = "//h3")
    public WebElement infintScrollText;

}
