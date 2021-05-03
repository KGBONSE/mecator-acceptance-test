import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "json:target/cucumber.json", "html:target/cucumber-html-report"},
        glue = ("steps"),
        features="..//mecator-acceptance-test//src//test//resources//features",
        tags ="@test"
)
public class RunCukeTest {
}
