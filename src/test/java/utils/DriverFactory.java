package utils;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import javafx.beans.property.StringPropertyBase;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

public class DriverFactory {

    public static WebDriver driver;
    DesiredCapabilities capabilities;
    public static final String TEST_BASE_URL =  "http://automationpractice.com/index.php";
    public static final String chrome_driver_path = "C:\\bin\\chromedriver.exe";

    @Before
    public void prepare() throws MalformedURLException {
       setUp(TEST_BASE_URL);
    }


    public void setUp(String baseUrl) throws MalformedURLException {
        System.setProperty("webdriver.chrome.driver",chrome_driver_path);
        capabilities = DesiredCapabilities.chrome();
        capabilities.setCapability("browserName", "chrome");
        driver = new ChromeDriver();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(baseUrl);
    }

    @After
    public void tearDown()
    {
        driver.close();
    }

}
