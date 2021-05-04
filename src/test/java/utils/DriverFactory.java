package utils;

import cucumber.api.java.After;
import javafx.beans.property.StringPropertyBase;
import org.junit.AfterClass;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.MalformedURLException;
import java.util.concurrent.TimeUnit;

public class DriverFactory {

    private static WebDriver driver;
    static DesiredCapabilities capabilities;
    public static final String TEST_BASE_URL =  "http://automationpractice.com/index.php";
    public static final String chrome_driver_path = "C:\\bin\\chromedriver.exe";

    @Before
    public static WebDriver setUp() throws MalformedURLException {
        if (driver == null) {
            System.setProperty("webdriver.chrome.driver", chrome_driver_path);
            capabilities = DesiredCapabilities.chrome();
            capabilities.setCapability("browserName", "chrome");
            driver = new ChromeDriver();
            driver.manage().deleteAllCookies();
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            driver.get(TEST_BASE_URL);
        }
        return driver;
    }

    @AfterClass
    public static void tearDown(){
        driver.close();
        try{
            driver.quit();
        }catch (Exception e){
            System.out.println("Browser closed already, " +
                    "did not need to quit after all");
            e.printStackTrace();
        }
    }

}
