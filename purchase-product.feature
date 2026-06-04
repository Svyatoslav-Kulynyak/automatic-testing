Feature: Product search and purchase in online store

  As a customer
  I want to search for a product and buy it
  So that I can successfully complete my order

  Scenario: Successful product purchase on Rozetka
    Given the user opens the Rozetka website
    And the user is on the home page
    When the user enters "iPhone 15" into the search field
    And the user clicks the search button
    Then the search results page should be displayed
    And the results should contain products related to "iPhone 15"

    When the user selects the first available product from the search results
    Then the product details page should be opened
    And the product name, price, and buy button should be visible

    When the user clicks the buy button
    Then the product should be added to the cart
    And the cart popup should be displayed
    And the selected product should be visible in the cart

    When the user clicks the checkout button
    Then the checkout page should be opened

    When the user fills in the customer information
      | field        | value              |
      | first name   | Sviatoslav         |
      | last name    | Kulyniak           |
      | phone        | +380991234567      |
      | email        | testuser@gmail.com |
    And the user selects delivery method "Nova Poshta"
    And the user selects payment method "Cash on delivery"
    And the user confirms the order
    Then the order should be successfully created
    And the user should see an order confirmation message
    And the order number should be displayed