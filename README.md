# qa-automation-test


# Automated Scripts using Protractor with TypeScript and Jasmine.
Protractor is an end-to-end test framework. Protractor runs tests against your application running in a real browser, interacting with it as a user would. Jasmine is a Behavior Driven testing framework for Javascript code.

## Prerequisites
User must have GIT as well as NodeJS installed. You can find the links on how to install these tools using the links below.

GIT - https://www.atlassian.com/git/tutorials/install-git Follow the instructions under "Install Git on Windows" to install it on windows.

NodeJS - https://nodejs.org/en/download/ download and install the most recent LTS version.

## Installation
You will first need to clone the repo by running the following command, using SSH. If you haven't setup SSH on your bitbucket account, you can do so by following the steps here https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html. 

**git clone git@bitbucket.org:agileharbor/sv2-selenium.git**

Once the download is complete you will need to install the dependencies required to run the automation script(s). To install the dependencies you just need run the following command. You should be able to run the scripts using any IDE but Visual Studio Code. It allows you to open a terminal through the IDE to run the scripts as well as log the output. It also contains a debugging feature to make troubleshooting the scripts easier. 

```bash
npm i
```
This will install Protractor, WebDriver-Manager, Jasmine, TypeScript along with other helpful tools such as protractor jasmine2 html reporter and jasmine spec reporter.

Once the dependencies have been installed you will need to run the post install script

```bash
npm run post-install
```
This will run WebDriver-Manager update which downloads the necessary drivers to run the scripts using Selenium. 
