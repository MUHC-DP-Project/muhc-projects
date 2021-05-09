Feature: Create a project
As a general user
I want to create a project
so that others can join and i can keep track of my project
  Scenario Outline :Creating a project (Normal Flow)
    Given I am researcher or healthcare professional
    And I am logged into the system
    When I i request creating project with <principalinvestigator_name>, <coinvestigator_name>, <collaborator_name>, <study_size>, <study_participants>, <project_title> , <project_start_date>, <project_end_date>, <project_description>, <project_funds_status> , <scientific_review_status>, <irb_approval_status>, <mcgill_location> , <non_mcgill_location> , <research_method> , <milestones>
    Then project <project_title> is defined
    Examples:
      | principalinvestigator_name | coinvestigator_name | collaborator_name | study_size | study_participants | project_title | project_start_date | project_end_date | project_description                   | project_funds_status    | scientific_review_status | irb_approval_status | mcgill_location | non_mcgill_location    | research_method | milestones |
      | John Test                  | Bruce Testing       | Jack True         | 31-50      | Residents          | First Project | 01/01/2021         | 03/03/2021       | Project is about studying the corona. | Project has been funded | No                       | No                  | CLCS-Metro      | University de Montreal | qualititative   | ??????     |


  Scenario Outline:Can't create a project (Error Flow)
    Given I am researcher or healthcare professional
    When I i request creating project with <principalinvestigator_name>, <coinvestigator_name>, <collaborator_name>, <study_size>, <study_participants>, <project_start_date>, <project_end_date>, <project_description>, <project_funds_status> , <scientific_review_status>, <irb_approval_status>, <mcgill_location> , <non_mcgill_location> , <research_method> , <milestones>
    Then system returns error message "Project should have name"
    Examples:
      | principalinvestigator_name | coinvestigator_name | collaborator_name | study_size | study_participants | project_start_date | project_end_date   | project_description | project_funds_status    | scientific_review_status | irb_approval_status | mcgill_location | non_mcgill_location    | research_method | milestones |
      | John Test                  | Bruce Testing       | Jack True         | 31-50      | Residents          | First Project      | 01/01/2021         | 03/03/2021          | Project has been funded | No                       | No                  | CLCS-Metro      | University de Montreal | qualititative   | ??????     |

