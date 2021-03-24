Feature: Search for a project
As a general user
I want to search for a project
so that i can find projects in my interests
Scenario Outline :Searching for project (Normal Flow)
    Given I am researcher or healthcare professional
    And I am logged into the system
    When I i request a search with <search_topic>
    Then projects related with <search_topic> should appear
  Examples:
    | search_topic |
    |Cancer        |
  Scenario Outline :Not successfully searching for project (Error Flow)
    Given I am researcher or healthcare professional
    And I am logged into the system
    When I i request a search with <search_topic>
    Then system notifies me that "No relevant project exists"
  Examples:
    | search_topic               |
    |How to play soccer ?        |




