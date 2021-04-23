package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage{
    public HomePage(WebDriver driver) {
        super();
        this.driver = driver;
        PageFactory.initElements(driver, this);
        WebDriverWait wait = new WebDriverWait(driver, 40);
    }
    WebDriver driver;
    @FindBy(id = "SubmitCreate") WebElement clickCreateAccount;
    @FindBy(id = "email_create") WebElement enterEmail;

    @FindBy(xpath = "//a[@class='login']") WebElement signInLink;
    @FindBy(id="id_gender1")
    private WebElement selectTitle;


    public void clickSignInLink() {
        signInLink.click();
    }

    public void setEnterEmail(String email) {
        enterEmail.sendKeys(email);
    }
    public void setClickCreateAccount(){
        clickCreateAccount.click();
        WebDriverWait wait = new WebDriverWait(driver, 400);
        wait.until(ExpectedConditions.elementToBeClickable(selectTitle));

    }
    }

