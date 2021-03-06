$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cucumber.feature");
formatter.feature({
  "line": 1,
  "name": "Creating account and adding items to chart",
  "description": "",
  "id": "creating-account-and-adding-items-to-chart",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "create new account and add item to cart",
  "description": "",
  "id": "creating-account-and-adding-items-to-chart;create-new-account-and-add-item-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create an account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see a browser title containing \"\u003cloginPageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I provide my details as follows: \"\u003cfname\u003e\", \"\u003clname\u003e\", \"\u003cpWord\u003e\", \"\u003cdayOfBirth\u003e\", \"\u003cmonthOfBirth\u003e\", \"\u003cyearOfBirth\u003e\", \"\u003caddress\u003e\", \"\u003ccity\u003e\", \"\u003cstate\u003e\", \"\u003cpCode\u003e\", \"\u003ccountry\u003e\", \"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click to register",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see a browser title containing \"\u003cacccountPageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on the dresses link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I see a browser title containing \"\u003cdressesPageTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I decide to add a dress to the cart",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The dress is added successfully text \"\u003ctext\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "creating-account-and-adding-items-to-chart;create-new-account-and-add-item-to-cart;",
  "rows": [
    {
      "cells": [
        "loginPageTitle",
        "acccountPageTitle",
        "dressesPageTitle",
        "fname",
        "lname",
        "pWord",
        "text",
        "dayOfBirth",
        "monthOfBirth",
        "yearOfBirth",
        "address",
        "city",
        "state",
        "pCode",
        "country",
        "phone"
      ],
      "line": 19,
      "id": "creating-account-and-adding-items-to-chart;create-new-account-and-add-item-to-cart;;1"
    },
    {
      "cells": [
        "Login - My Store",
        "My account - My Store",
        "Dresses - My Store",
        "mark",
        "kofi",
        "Curiy7n1",
        "Product successfully added to your shopping cart",
        "12",
        "May",
        "1977",
        "102 drive",
        "london",
        "Texas",
        "00000",
        "United States",
        "07952983202"
      ],
      "line": 20,
      "id": "creating-account-and-adding-items-to-chart;create-new-account-and-add-item-to-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "create new account and add item to cart",
  "description": "",
  "id": "creating-account-and-adding-items-to-chart;create-new-account-and-add-item-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create an account",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see a browser title containing \"Login - My Store\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I provide my details as follows: \"mark\", \"kofi\", \"Curiy7n1\", \"12\", \"May\", \"1977\", \"102 drive\", \"london\", \"Texas\", \"00000\", \"United States\", \"07952983202\"",
  "matchedColumns": [
    3,
    4,
    5,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click to register",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I see a browser title containing \"My account - My Store\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on the dresses link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I see a browser title containing \"Dresses - My Store\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I decide to add a dress to the cart",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "The dress is added successfully text \"Product successfully added to your shopping cart\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberSteps.i_navigate_to()"
});
formatter.result({
  "duration": 6912842500,
  "status": "passed"
});
formatter.match({
  "location": "CucumberSteps.create_account()"
});
formatter.result({
  "duration": 4764915800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login - My Store",
      "offset": 34
    }
  ],
  "location": "CucumberSteps.i_see_a_browser_title_containing(String)"
});
formatter.result({
  "duration": 13854000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mark",
      "offset": 34
    },
    {
      "val": "kofi",
      "offset": 42
    },
    {
      "val": "Curiy7n1",
      "offset": 50
    },
    {
      "val": "12",
      "offset": 62
    },
    {
      "val": "May",
      "offset": 68
    },
    {
      "val": "1977",
      "offset": 75
    },
    {
      "val": "102 drive",
      "offset": 83
    },
    {
      "val": "london",
      "offset": 96
    },
    {
      "val": "Texas",
      "offset": 106
    },
    {
      "val": "00000",
      "offset": 115
    },
    {
      "val": "United States",
      "offset": 124
    },
    {
      "val": "07952983202",
      "offset": 141
    }
  ],
  "location": "CucumberSteps.enter_details(String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 921575100,
  "status": "passed"
});
formatter.match({
  "location": "CucumberSteps.I_click_to_register()"
});
formatter.result({
  "duration": 3954129100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "My account - My Store",
      "offset": 34
    }
  ],
  "location": "CucumberSteps.i_see_a_browser_title_containing(String)"
});
formatter.result({
  "duration": 11322200,
  "status": "passed"
});
formatter.match({
  "location": "CucumberSteps.I_click_on_dressess_link()"
});
formatter.result({
  "duration": 3211371000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dresses - My Store",
      "offset": 34
    }
  ],
  "location": "CucumberSteps.i_see_a_browser_title_containing(String)"
});
formatter.result({
  "duration": 10192500,
  "status": "passed"
});
formatter.match({
  "location": "CucumberSteps.I_decide_to_add_a_dress_to_the_cart()"
});
formatter.result({
  "duration": 260352800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 38
    }
  ],
  "location": "CucumberSteps.dress_is_added_cart_text(String)"
});
formatter.result({
  "duration": 27587700,
  "status": "passed"
});
});