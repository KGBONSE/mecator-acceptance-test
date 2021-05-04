package pages;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.ArrayList;
import java.util.List;


public class MyStorePage {
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

    @FindBy(id = "id_gender1")
    private WebElement selectTitle;

    @FindBy(id = "customer_firstname")
    private WebElement enterFirstName;

    @FindBy(id = "customer_lastname")
    private WebElement lastName;
    @FindBy(id = "lastname")
    private WebElement enterLastName;


    @FindBy(id = "firstname")
    private WebElement firstName;

    @FindBy(id = "passwd")
    private WebElement enterPword;

    @FindBy(id = "days")
    private WebElement enterDay;

    @FindBy(id = "months")
    private WebElement enterMonth;

    @FindBy(id = "years")
    private WebElement enterYear;

    //Address

    @FindBy(id = "address1")
    private WebElement enterAddress;

    @FindBy(id = "city")
    private WebElement enterCity;

    @FindBy(id = "id_state")
    private WebElement enterState;

    @FindBy(id = "postcode")
    private WebElement enterPostCode;

    @FindBy(id = "id_country")
    private WebElement enterCountry;

    @FindBy(id = "phone_mobile")
    private WebElement enterPnumber;

    @FindBy(id = "submitAccount")
    private WebElement clickRegister;

    @FindBy(id = "email")
    private WebElement inputEmail;

    @FindBy(linkText = "DRESSES")
    private WebElement clickDresses;

    @FindBy(xpath = "//*[@id=\"center_column\"]/ul/li[2]/div/div[2]/div[2]/a[1]/span")
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

    public void clickOnDresses() {
        clickDresses.click();
    }

    public void addDressToCart() {
        //list all prices on page
        List<WebElement> prices = driver.findElements(By.xpath(".//*[@title='Add to cart']/parent::div/parent::div//span[@class='price product-price']"));
        //creat an empty array
        ArrayList<Double> newPrices = new ArrayList<Double>();
        //put prices without $ sign into array
        for (WebElement price : prices) {
            double priceWithoutCurrency = Double.parseDouble(((WebElement) price).getText().replace("$", ""));
            newPrices.add(priceWithoutCurrency);
        }
        //declare a variable for the highest value
        double highestValue = 0.0d;
        //loop through array of prices to find the highest price
        for (int counter = 0; counter < newPrices.size(); counter++) {
            if (newPrices.get(counter) > highestValue) {
                highestValue = newPrices.get(counter);
            }
        }
        System.out.println("HighestValue:" + String.valueOf(highestValue));

        //return product list elements
        List<WebElement> productList = driver.findElements(By.xpath(".//div[@class='product-container']"));
        //loop through products
        for (WebElement product : productList) {
            // find the higest price in the text of the product
            if (product.getText().contains(String.valueOf(highestValue))) {
                //if price is found move cursor to product so that the button is visible
                Actions actions = new Actions(driver);
                actions.moveToElement(product).perform();
                //find the add to cart button
                WebElement addToCartbutton = product.findElement(By.xpath(".//a[@class='button ajax_add_to_cart_button btn btn-default']"));
                //move cursor to button
                actions.moveToElement(addToCartbutton).perform();
                //click the button
                addToCartbutton.click();
                break;
            }
        }
    }
}
