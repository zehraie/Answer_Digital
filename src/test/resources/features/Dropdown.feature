@wip
Feature: Key Presses page

    Scenario: the user clicks Dropdown button
    Given the user is on the Menu page
    And the user clicks on "Dropdown" link
      When the user click on dropdown button
      And the user choses each option one by one
      Then the user can see each following options
      |Option 1|
      |Option 2|

