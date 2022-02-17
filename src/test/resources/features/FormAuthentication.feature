Feature:Login page

  Background:
    Given the user is on the Menu page
    And the user clicks on "<form authentication>"

  Scenario:the user can login
    When the user enters valid credentials
    Then the user should be able to login
    And the user logs out

  Scenario Outline:User can not login with any invalid credentials
    When user enters invalid "<username>" or "<password>"
    Then user should see error "<message>"
    Examples:
      | username | password             | message                   |
      | tomsmith | ue7e99e0!!hhh        | Your username is invalid! |
      | *hrupppp | SuperSecretPassword! | Your username is invalid! |

