# cypress_demo

### Accessibility needs/testing can be classified into 

* Vision
* Hearing
* Motor nerve - some one having difficulty with holding things, writting.
* Mental health
* Learning.

### with this framework, we can able to cover the tests related to vision, hearing. Rest can be done manually.

####  aria attributes, background colour can be tested using this framework. Used aXe library to test the colour contrast and all the other accessibility tests with respect to the Accessibility standards. The accessibility failures can be view as a log.

#### The project has a integration folder where alL the tests exists. The checks for the aria attributes exists in here.

#### Running tests: Considered that you have already cloned the project. You can run tests in two ways - Using Dashboard and using Commandline.


* Using Dashboard: Navigate to top level of the Cypress folder structure. 
** Type npx cypress open 
** A dashboard appears, click on any test that you wish to run. 
** Once click, browser will be opened and tests will run in them.

* Using Command Line or CI:
** Type 
```
npm run cypress_tests
```
as I have configured cypress_tests as a argument in [package.json](https://github.com/psuryateja123/cypress_meetup_demo/blob/master/package.json).


This will run all the tests that are in integration folder on a headless browser called Electron.


* These tests are intended to run as a first run before doing manual accessibility tests.
* [Travis logs](https://github.com/psuryateja123/cypress_meetup_demo/blob/master/travis_logs.png) 

#### Apart from running the accessibility tests mentioned above. I have included aXe library that will run a scan on the URL for accessibility compliance. 

* Tests related to aXe library can be invoke by using a axe_tests, as I have configured the same in package.json. 

```
npm run axe_tests
```
