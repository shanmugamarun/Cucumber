package stepDefinition;

 import cucumber.api.java8.En;

/**
 * Created by shanmugamarun on 28-03-2017.
 */
public class Login implements En {

    public Login(){


        Given("^: I am on home page$", () -> {
            // Write code here that turns the phrase above into concrete actions
            System.out.print("Am on the home page ");
        });

        When("^: I enter credentials and click ok$", () -> {
            // Write code here that turns the phrase above into concrete actions
            System.out.print("Hey I just entered the credentials ");
        });

        Then("^: Login should happen with no errors$", () -> {
            // Write code here that turns the phrase above into concrete actions
            System.out.print("Hi, Just now logged in ");
        });

    }







}
