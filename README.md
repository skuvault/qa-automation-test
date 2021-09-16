# Automated Scripts using Protractor with TypeScript and Jasmine.
Protractor is an end-to-end test framework. Protractor runs tests against your application running in a real browser, interacting with it as a user would. Jasmine is a Behavior Driven testing framework for Javascript code.

https://github.com/angular/protractor

## Prerequisites
User must have GIT as well as NodeJS installed. You can find the links on how to install these tools using the links below.

GIT - https://www.atlassian.com/git/tutorials/install-git Follow the instructions under "Install Git on Windows" to install it on windows.

NodeJS - https://nodejs.org/en/download/ download and install the most recent LTS version.

Java - https://www.java.com/en/download/ needed to run Selenium server

## Installation
You will first need to clone the repo

Once the download is complete you will need to install the dependencies required to run the automation script(s). To install the dependencies you just need run the following command. You should be able to run the scripts using any IDE. We recommend to use Visual Studio Code. It allows you to open a terminal through the IDE to run the scripts as well as log the output. It also contains a debugging feature to make troubleshooting the scripts easier. 

```bash
npm i
```
This will install Protractor, WebDriver-Manager, Jasmine, TypeScript along with other helpful tools such as protractor jasmine2 html reporter and jasmine spec reporter.

Once the dependencies have been installed you will need to run the post install script

```bash
npm run webdriver-update
```
This download the necessary drivers to run the scripts using Selenium. 

## Setup
To launch the selenium server by opening the terminal then use the following command

```bash
npm run webdriver-start
```

You should see a log with the server starting and it will be ready once you see "Selenium Server is up and running on port 4444". 

You can run the scripts either headlessly (without the browser loading) or with the browser. This can be configured in the config file as well. Simply comment out the values "--headless" and "--disable-gpu" located in the "args:" array of the config file if you need to watch the script run in a browser. To comment out these values in Visual Stuio code you can select (highlight) both values then select Edit > Toggle block comment or just simply put /* at the beginning of these values and put */ at the end of the values. 

## How to run a script
To run the script you will simply type in 

```bash 
npm run QaTest
``` 

*NOTE* The webdriver-update will download the most recent drivers available and therefore you may be required to update your browser if you haven't done so in a while. If you encounter an error during one of the test runs and it displays an error about Chrome needing to be updated. You will likely need to update Chrome, restart the browser then run the test again.

All scripts should be listed in the "specs" directory. 

During the test, the result of each step should be logged in the console as either pass(green) or fail(red). Once the test is complete there will be an output with the total number of steps and number of failed steps (if any) along with the total duration of the script run time.  


# Test Instructions

Work with specs\QaTest\qaTest.ts and finish writing the suite of tests. There is an example test that navigates to the page that needs to be tested.

On https://www.skuvault.com/requestdemo/ page write automated tests to fill out the input files in the form and submit it.

Be sure to review the page and see what kind of validation gets fired when all the information is not present when the "Get My Demo" button is pressed and come up with some tests that validates that all the input fields are filled out.

Please try and use an assertion to test what happens after the button "Get My Demo" is pressed with all invormation filled out.

Use Page Object Model design pattern to store all web elements used for testing.