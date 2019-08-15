package xxx.identitymanager.pact;


import au.com.dius.pact.provider.junit.Provider;
import au.com.dius.pact.provider.junit.State;
import au.com.dius.pact.provider.junit.loader.PactBroker;
import au.com.dius.pact.provider.junit.loader.PactFolder;
import au.com.dius.pact.provider.junit.loader.PactUrl;
import au.com.dius.pact.provider.junit.target.Target;
import au.com.dius.pact.provider.junit.target.TestTarget;
import au.com.dius.pact.provider.spring.SpringRestPactRunner;
import au.com.dius.pact.provider.spring.target.SpringBootHttpTarget;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.junit.runner.RunWith;

@RunWith(SpringRestPactRunner.class)
@Provider("Platform Services")
@PactFolder("src/test/resources/pacts")
@TestPropertySource(locations = "classpath:bootstrap.yml")
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class ProviderPactTest {
    @TestTarget
    public final Target target = new SpringBootHttpTarget();

    @State("login with valid userId")
    public void loginTest()
    {
        System.out.println("Login Test with valid UserId Verified");
    }
}
