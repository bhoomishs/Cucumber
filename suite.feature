# features/example.feature

Feature: Example feature

  Scenario: Verify the title of the example page
    Given I visit the example page
    Then I should see the title "Example Domain"
