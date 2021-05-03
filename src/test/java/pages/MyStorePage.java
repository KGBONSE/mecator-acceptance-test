package pages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;


public class MyStorePage{
    public MyStorePage(WebDriver driver) {
        super();
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

WebDriver driver;
    @FindBy(id = "SubmitCreate")
    WebElement clickCreateAccount;

    @FindBy(id = "email_create")
    WebElement enterEmail;

    @FindBy(xpath = "//a[@class='login']")
    WebElement signInLink;

    @FindBy(id="id_gender1")
    private WebElement selectTitle;

    @FindBy(id="customer_firstname")
    private WebElement enterFirstName;

    @FindBy(id="customer_lastname")
    private WebElement lastName;
    @FindBy(id="lastname")
    private WebElement enterLastName;


    @FindBy(id="firstname")
    private WebElement firstName;

    @FindBy(id="passwd")
    private WebElement enterPword;

    @FindBy(id="days")
    private WebElement enterDay;

    @FindBy(id="months")
    private WebElement enterMonth;

    @FindBy(id="years")
    private WebElement enterYear;

    //Address

    @FindBy(id="address1")
    private WebElement enterAddress;

    @FindBy(id="city")
    private WebElement enterCity;

    @FindBy(id="id_state")
    private WebElement enterState;

    @FindBy(id="postcode")
    private WebElement enterPostCode;

    @FindBy(id="id_country")
    private WebElement enterCountry;

    @FindBy(id="phone_mobile")
    private WebElement enterPnumber;

    @FindBy(id="submitAccount")
    private WebElement clickRegister;

    @FindBy(id="email")
    private WebElement inputEmail;

  @FindBy(linkText ="DRESSES")
  private WebElement clickDresses;

  @FindBy(xpath ="//*[@id=\"center_column\"]/ul/li[2]/div/div[2]/div[2]/a[1]/span")
  private WebElement clickAddDressToCart;

    @FindBy(xpath = "//*[@id=\"layer_cart\"]/div[1]/div[1]")
    private WebElement dressAddedToCartMessage;

    @FindBy(xpath = "//*[@id=\"center_column\"]/ul/li[2]/div/div[1]/div/a[1]/img")
    private WebElement addDress;

    @FindBy(xpath = "//div[@id='center_column']")
    private WebElement productList;

    public void setEnterFirstName(String fName, String lName, String pWord, String dBirth, String mBirth, String yBirth, String address, String city, String state, String pCode, String country, String phone) {
        selectTitle.click();
        enterFirstName.sendKeys(fName);
        lastName.sendKeys(lName);
        enterPword.sendKeys(pWord);
        enterDay.sendKeys(dBirth);
        enterMonth.sendKeys(mBirth);
        enterYear.sendKeys(yBirth);
        enterAddress.sendKeys(address);
        enterCity.sendKeys(city);
        enterState.sendKeys(state);
        enterPostCode.sendKeys(pCode);
        enterCountry.sendKeys(country);
        enterPnumber.sendKeys(phone);
    }

    public void setClickRegister() {
        clickRegister.click();
    }
    public void clickOnDresses(){
        clickDresses.click();

    }
    public void addDressToCart(){
//        Actions actions = new Actions(driver);
//        actions.moveToElement(addDress).perform();
        List<WebElement> elementsList = (List<WebElement>) productList;
        for (WebElement checkBox : elementsList) {
            int i = 0;
            checkBox = elementsList.get(i);

            clickAddDressToCart.click();
        }
    }
}