Feature: Creating account and adding items to chart

  @test
  Scenario Outline: create new account and add item to cart
    Given I am on the home page
    When I create an account "<emailAddress>"
    Then I see a browser title containing "<loginPageTitle>"
    When I provide my details as follows: "<fname>", "<lname>", "<pWord>", "<dayOfBirth>", "<monthOfBirth>", "<yearOfBirth>", "<address>", "<city>", "<state>", "<pCode>", "<country>", "<phone>"

    And I click to register
    Then I see a browser title containing "<acccountPageTitle>"

    When I click on the dresses link
    Then I see a browser title containing "<dressesPageTitle>"

    When I decide to add a dress to the cart
    Then The dress is added successfullly text "<text>"
    Examples:
      | url                                     | emailAddress       | loginPageTitle   | acccountPageTitle     | dressesPageTitle   | fname | lname | pWord    | text                                             | dayOfBirth | monthOfBirth | yearOfBirth | address   | city   | state | pCode | country       | phone       |
      | http://automationpractice.com/index.php | myemail@test.co.uk | Login - My Store | My account - My Store | Dresses - My Store | mark  | kofi  | Curiy7n1 | Product successfully added to your shopping cart | 12         | May          | 1977        | 102 drive | london | Texas | 00000 | United States | 07952983202 |
