Feature: View my projects
As a general user
I want to view my current projects
so that i can see all the projects i am involved

Scenario :View my projects (Normal Flow)
    Given I am researcher or healthcare professional
    And I am logged into the system
    When I am at the home page
    Then my projects should appear on the screen


  Scenario :View my projects (Error Flow)
    Given I am researcher or healthcare professional
    And I am logged into the system
    When I am at the home page and don't have any projects
    Then my projects doesn't appear on the screen.