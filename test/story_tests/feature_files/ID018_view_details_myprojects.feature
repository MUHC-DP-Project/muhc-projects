Feature: View details of my project
As a general user
I want to view details of my project
so that i can see my progress

Scenario :View details of my projects (Normal Flow)
    Given I am researcher or healthcare professional
    And I am logged into the system
    When I request to view the details of my project
    Then details of my project is provided.
