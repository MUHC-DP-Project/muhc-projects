Feature: Create a project
As a general user
I want to create a project
so that others can join and i can keep track of my project
  Scenario Outline:Creating a project (Normal Flow)
    Given I am researcher or healthcare professional
    And I am logged into the system
    When I i request creating project with <pname>, <pdefinition>, <milestone>, <research_area>, <needed_profession>
    Then project <pname> is defined
    Examples:
      | pname               | pdefinition                     | milestone | research_area | needed_profession |
      | Human Genetics      | My research is to search for... | ????????? | Radiology    | Radiologist       |
      | Coronavirus Effect  | I will be searching Covid-19... | ????????? | Surgeon      | Surgeon       |

  Scenario Outline:Creating a project (Alternate Flow)
    Given I am a Resident
    And I am logged into the system
    When I i request creating project with <pname>, <pdefinition>, <research_area>, <needed_profession>
    Then project <pname> is created
    Examples:
      | pname               | pdefinition                     | research_area | needed_profession |
      | Human Genetics      | My research is to search for... | Radiology     | Radiologist       |
      | Coronavirus Effect  | I will be searching Covid-19... | Surgeon       | Surgeon           |


  Scenario Outline:Can't create a project (Error Flow)
    Given I am researcher or healthcare professional
    When I i request creating project with <pdefinition>, <milestone>, <researcharea>, <needed_profession>
    Then system returns error message "Project should have name"
    Examples:
      | pdefinition                     | milestone | researcharea | needed_profession |
      | My research is to search for... | ????????? | Radiology    | Radiologist       |
      | I will be searching Covid-19... | ????????? | Surgeon      | Surgeon           |

