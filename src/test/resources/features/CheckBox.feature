Feature: CheckBox page
  @wip
  Scenario: the user clicks Dropdown button
    Given the user is on the Menu page

    And the user clicks on "Checkboxes" link
    When the user can check one checkbox
    Then the user can see the the checkbox checked
    When the user can uncheck the other checkbox
    Then the user can see the checkbox unchecked
