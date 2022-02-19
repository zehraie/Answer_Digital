package com.answer.pages;

import com.answer.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FormAutPage extends BasePage {

    @FindBy(id ="username")
    public WebElement userNameBox;

    @FindBy(id ="password")
    public WebElement passwordBox;

    @FindBy(xpath = "//i[@class='fa fa-2x fa-sign-in']")
    public WebElement login;

    @FindBy(id = "flash")
    public WebElement logInMessage;
    @FindBy(xpath = "//div[normalize-space(@id)='flash']")
    public WebElement getLogInMessage;


    public void login (String userNameStr, String passwordStr){
        userNameBox.sendKeys(userNameStr);
        passwordBox.sendKeys(passwordStr);
        login.click();
    }




}
