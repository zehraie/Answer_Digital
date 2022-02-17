package com.answer.pages;

import com.answer.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public abstract class BasePage {

    @FindBy (linkText = "Form Authentication")
    public WebElement formAuthent;

    @FindBy(linkText = "Infinite Scroll")
    public WebElement infinScroll;

    @FindBy(linkText = "Key Presses")
    public WebElement keyPress;




    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

}
