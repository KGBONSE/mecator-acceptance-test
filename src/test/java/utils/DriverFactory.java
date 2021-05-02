package utils;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import javafx.beans.property.StringPropertyBase;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.MalformedURLException;
public class DriverFactory
{

    public static RemoteWebDriver driver;
    DesiredCapabilities capabilities;
    public static final String TEST_BASE_URL =  "http://automationpractice.com/index.php";

    @Before
    public void prepare() throws MalformedURLException {
       setUp(TEST_BASE_URL);
    }


    public void setUp(String baseUrl) throws MalformedURLException

    {
        capabilities = DesiredCapabilities.chrome();
        capabilities.setCapability("browserName", "chrome");
        driver = new ChromeDriver();
        driver.manage().deleteAllCookies();
        driver.get(baseUrl);
    }

    @After
    public void tearDown()
    {
        driver.close();
    }

}
