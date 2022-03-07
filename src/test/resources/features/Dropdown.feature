
<<<<<<< HEAD
Feature: Dropdown page
=======
Feature: Key Presses page
>>>>>>> master

    Scenario: the user clicks Dropdown button
    Given the user is on the Menu page
    And the user clicks on "Dropdown" link
      When the user click on dropdown button
      And the user can see default option "Please select an option"
      Then the user can see each following options
      |Option 1|
      |Option 2|

