Feature: Edit my project
As a general user
I want to edit my project
so that i can update my progress

  Scenario Outline :Editing my project (Normal Flow)
    Given I am researcher or healthcare professional
    And I am logged into the system
    When I i request changing the name <project_end_date> with a <new_project_end_date>
    Then project is updated with <new_project_end_date>
    Examples:
      | project_end_date | new_project_end_date     |
      | 11/11/2021       | 12/12/2021               |


    Scenario Outline :Can't edit my project (Error Flow)
    Given I am researcher or healthcare professional
    And I am logged into the system
    When I i request changing the name <project_end_date> with a <new_project_end_date>
    Then system returns "end
    Examples:
      | project_end_date | new_project_end_date |
      | 11/11/2021       | 10/10/2019           |






