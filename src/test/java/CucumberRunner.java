import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format = {"pretty", "json:target/cucumber.json"},
        glue = ("steps"),
        features="src/test/resources",
        tags ="@test"
)
public class CucumberRunner {
}