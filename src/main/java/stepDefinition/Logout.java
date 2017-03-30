package stepDefinition;

import cucumber.api.java8.En;

/**
 * Created by shanmugamarun on 30-03-2017.
 */
public class Logout implements En {


    public  Logout(){

        Given("^user navigates to application$", () -> {
            // Write code here that turns the phrase above into concrete actions
            System.out.println("Navigates to application");
        });

        When("^I enter Username as \"([^\"]*)\" and Password as \"([^\"]*)\"$", (String username, String password) -> {
            // Write code here that turns the phrase above into concrete actions
            System.out.println("Navigates to application "+username);
            System.out.println("Navigates to application "+password);

        });

        Then("^login should be unsuccessful$", () -> {
            // Write code here that turns the phrase above into concrete actions
            System.out.println("Navigates to application");
        });

    }
}
