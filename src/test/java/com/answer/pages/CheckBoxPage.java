package com.answer.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CheckBoxPage extends HomePage{

    @FindBy(xpath = "//form/input[1]")
    public WebElement checkbox1;

    @FindBy(xpath = "//form/input[2]")
    public WebElement checkbox2;
}
