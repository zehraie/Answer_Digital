Feature: Key Presses page

  Scenario: the user can click the key
    Given the user is on the Menu page
    And the user clicks on "<Key presses>"
    When the user clicks on 4 keys
    Then the user can see the text after pressing every key