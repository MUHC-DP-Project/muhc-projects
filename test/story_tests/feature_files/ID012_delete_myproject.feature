Feature: Delete my project
As a general user
I want to delete my project
so that i can have it removed from the system
  Scenario Outline: Delete my project (Normal Flow)
    Given I am general user
    And I am logged into the system
    And my project <project_title> is defined
    When I request deleting my project <project_title>
    Then project <project_title> is not defined
    Examples:
      | project_title |
      |Research on Human Brain      |
      |Genetics to next generations |

  Scenario Outline: Delete my project (Error Flow)
    Given I am general user
    And I am logged into the system
    And my project <project_title> is not defined
    When I request deleting my project <project_title>
    Then I should get a error message "Project doesn't exists"
    Examples:
      | project_title |
      |Not existing project         |
      |laksdaoi9132kamsdaso1o312m   |