Feature: Infinite Scroll page

     Scenario : the user can scroll
     Given the user is on the Menu page
     And the user clicks on "<Infinite scroll>"
       When the user scroll to the bottom of the pape twice
       And the user scrolls back to top of the page
       Then the user can see "<Infinite Scroll>" title


