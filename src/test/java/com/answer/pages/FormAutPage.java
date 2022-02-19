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


    @FindBy(xpath = "//div[normalize-space(text())='You logged into a secure area!']")
    public WebElement getLogInMessage;

    @FindBy(xpath = "//div[normalize-space(text())='Your password is invalid!']")
    public WebElement getErrorMessage;

    @FindBy(xpath = "//i[contains(text(),'Logout')]")
    public WebElement logOut;

    @FindBy(xpath = "//h2")
    public WebElement loginPageElement;


    public void login (String userNameStr, String passwordStr){
        userNameBox.sendKeys(userNameStr);
        passwordBox.sendKeys(passwordStr);
        login.click();
    }




}
