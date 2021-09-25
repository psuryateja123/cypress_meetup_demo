var AxeBuilder = require('axe-webdriverjs');
var WebDriver = require('selenium-webdriver');
var driver = new WebDriver.Builder()
    .forBrowser('chrome')
    .build();

driver
    .get('https://www.google.com/')
    .then(function() {
        AxeBuilder(driver).analyze(function(err, results) {
            if (err) {
                // Handle error somehow
            }
            console.log(results);
        });
    });