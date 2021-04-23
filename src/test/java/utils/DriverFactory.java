package utils;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.MalformedURLException;
public class DriverFactory
{

    public static RemoteWebDriver driver;
    DesiredCapabilities capabilities;

    @Before
    public void setUp() throws MalformedURLException
    {
        capabilities = DesiredCapabilities.chrome();
        capabilities.setCapability("browserName", "chrome");
        driver = new ChromeDriver();
        driver.manage().deleteAllCookies();
    }

    @After
    public void tearDown()
    {
        driver.close();
    }

}
