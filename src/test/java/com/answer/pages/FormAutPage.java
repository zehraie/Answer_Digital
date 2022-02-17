package com.answer.pages;

import com.answer.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FormAutPage  {
    public FormAutPage(){
        PageFactory.initElements(Driver.get(), this);
    }
    @FindBy(id ="username")
    public WebElement userName;

    @FindBy(id ="password")
    public WebElement password;

    @FindBy(xpath = "//i[@class=fa fa-2x fa-sign-in]")
    public WebElement login;




}
