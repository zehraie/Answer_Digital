package com.answer.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class DropdownPage extends HomePage{

    @FindBy(id ="dropdown")
    public WebElement dropDownBox;

    @FindBy(xpath = "//select//option[@value='1']")
    public List<WebElement> selectOptions;
}
