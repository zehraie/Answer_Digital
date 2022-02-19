package com.answer.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class KeyPressPage extends HomePage {

    @FindBy(id ="target")
    public WebElement keyInputBox;

    @FindBy(id ="result")
    public WebElement textElement;



}
