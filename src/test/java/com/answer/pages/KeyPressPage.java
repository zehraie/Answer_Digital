package com.answer.pages;

import com.answer.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class KeyPressPage extends BasePage{

    @FindBy(id ="target")
    public WebElement keyInputBox;

    @FindBy(id ="result")
    public WebElement textElement;



}
