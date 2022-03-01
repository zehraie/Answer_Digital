package com.answer.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class DropdownPage extends HomePage{

    @FindBy(id ="dropdown")
    public WebElement dropDownBox;

    @FindBy(xpath = "//select//option[@value='1']")
    public List<WebElement> selectOptions;

    public List<WebElement> getOptions(){
        Select select = new Select(dropDownBox);
        return select.getOptions();
    }
    public WebElement getFirtSelectedOption(){
        Select select = new Select(dropDownBox);
        return select.getFirstSelectedOption();
    }

}
