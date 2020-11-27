Feature: Delete my project
As a general user
I want to delete my project
so that i can have it removed from the system
  Scenario Outline: Delete my project (Normal Flow)
    Given I am general user
    And I am logged into the system
    And my project <pname> is defined
    When I request deleting my project <pname>
    Then project <pname> is not defined
    Examples:
      | pname |
      |Research on Human Brain      |
      |Genetics to next generations |

  Scenario Outline: Delete my project (Error Flow)
    Given I am general user
    And I am logged into the system
    And my project <pname> is not defined
    When I request deleting my project <pname>
    Then I should get a error message "Project doesn't exists"
    Examples:
      | pname |
      |Not existing project         |
      |laksdaoi9132kamsdaso1o312m   |