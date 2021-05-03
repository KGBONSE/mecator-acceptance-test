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
  "name": "I create an account \"\u003cemailAddress\u003e\"",
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
  "name": "The dress is added successfullly text \"\u003ctext\u003e\"",
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
        "url",
        "emailAddress",
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
        "http://automationpractice.com/index.php",
        "yetlmail@test.co.uk",
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
  "name": "I create an account \"yetlmail@test.co.uk\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see a browser title containing \"Login - My Store\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I provide my details as follows: \"mark\", \"kofi\", \"Curiy7n1\", \"12\", \"May\", \"1977\", \"102 drive\", \"london\", \"Texas\", \"00000\", \"United States\", \"07952983202\"",
  "matchedColumns": [
    16,
    17,
    5,
    6,
    7,
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
    3
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
    4
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
  "name": "The dress is added successfullly text \"Product successfully added to your shopping cart\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberSteps.i_navigate_to()"
});
formatter.result({
  "duration": 71339700,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class steps.CucumberSteps\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:45)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:39)\r\n\t... 56 more\r\nCaused by: java.lang.RuntimeException: java.lang.reflect.InvocationTargetException\r\n\tat org.openqa.selenium.support.PageFactory.instantiatePage(PageFactory.java:137)\r\n\tat org.openqa.selenium.support.PageFactory.initElements(PageFactory.java:63)\r\n\tat steps.CucumberSteps.\u003cinit\u003e(CucumberSteps.java:22)\r\n\t... 61 more\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.support.PageFactory.instantiatePage(PageFactory.java:128)\r\n\t... 63 more\r\nCaused by: java.lang.NullPointerException\r\n\tat com.google.common.base.Preconditions.checkNotNull(Preconditions.java:770)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:94)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:70)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:44)\r\n\tat pages.HomePage.\u003cinit\u003e(HomePage.java:16)\r\n\t... 68 more\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "yetlmail@test.co.uk",
      "offset": 21
    }
  ],
  "location": "CucumberSteps.create_account(String)"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CucumberSteps.I_click_to_register()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CucumberSteps.I_click_on_dressess_link()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CucumberSteps.I_decide_to_add_a_dress_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart",
      "offset": 39
    }
  ],
  "location": "CucumberSteps.dress_is_added_cart_text(String)"
});
formatter.result({
  "status": "skipped"
});
});