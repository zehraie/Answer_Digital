package com.answer.pages;

import com.answer.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {

//     @FindBy (linkText = "Form Authentication")
//    public WebElement formAuthentLink;
//
//    @FindBy(linkText = "Infinite Scroll")
//    public WebElement infinScrollLink;
//
//    @FindBy(linkText = "Key Presses")
//    public WebElement keyPressLink;

    public void navigate(String link){
        Driver.get().findElement(By.linkText(link)).click();
    }




    public HomePage() {
        PageFactory.initElements(Driver.get(), this);
    }

}
