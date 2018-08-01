Feature: First cucumber example focused on javascript and cypress

  Scenario: Validate if the email is correct in a valid site
    Given I visit a valid "https://example.cypress.io" previous to test
    When I put my "jaredwuliger@gmail.com" in the field
    Then My "jaredwuliger@gmail.com" should be valid

