package steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import pages.HomePage;
import pages.MyStorePage;
import utils.DriverFactory;
import org.openqa.selenium.support.PageFactory;


import static org.junit.Assert.assertTrue;

public class CucumberSteps
{

    WebDriver driver = DriverFactory.driver;

    HomePage homePage = PageFactory.initElements(driver, HomePage.class);
    MyStorePage myStore = PageFactory.initElements(driver, MyStorePage.class);

    @Given("^I am on the home page$")
    public void i_navigate_to() throws Throwable {
        driver.navigate();

    }

    @When("^I create an account \"([^\"]*)\"$")
    public void create_account(String email) throws Throwable {
        homePage.clickSignInLink();
        homePage.setEnterEmail(email);
        homePage.setClickCreateAccount();

    }

    @Then("^I see a browser title containing \"([^\"]*)\"$")
    public void i_see_a_browser_title_containing(String text) throws Throwable {
        assertTrue(driver.getTitle().contains(text));
    }

    @When("^I provide my details as follows: \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void enter_details(String fName, String lName, String pWord, String dBirth, String mBirth, String yBirth, String address, String city, String state, String pCode, String country, String phone ) throws Throwable {
        myStore.setEnterFirstName(fName,lName,pWord, dBirth,mBirth,yBirth, address, city, state,pCode, country, phone);

    }
    @Then("^I click to register$")
    public void I_click_to_register() throws Throwable {
        myStore.setClickRegister();
    }

    @Then("^I click on the dresses link$")
    public void I_click_on_dressess_link() throws Throwable {
        myStore.clickOnDresses();
    }
    @Then("^I decide to add a dress to the cart$")
    public void I_decide_to_add_a_dress_to_the_cart() throws Throwable {
        myStore.addDressToCart();
    }
    @Then("^The dress is added successfullly text \"([^\"]*)\"$")
    public void dress_is_added_cart_text(String text) throws Throwable {
        assertTrue(driver.getPageSource().contains(text));
    }

}