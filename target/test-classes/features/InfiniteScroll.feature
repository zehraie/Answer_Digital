

Feature: Infinite Scroll page

     Scenario:the user can scroll down and up
     Given the user is on the Menu page
       And the user clicks on "Infinite scroll" link
       When the user scroll to the bottom of the pape twice
       Then the user shouldn't see the "Infinite Scroll" title
       And the user scrolls back to top of the page
       Then the user can see "Infinite Scroll" title


