import { Config, browser } from "protractor";
import { DisplayProcessor, SpecReporter } from "jasmine-spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;
import Jasmine2HtmlReporter from "protractor-jasmine2-html-reporter";
import moment = require("moment");

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `TypeScript ${log}`;
  }
};

let time = moment().format("MMMMDo[@]h_mm_ssa"),
  currentScript = process.env.npm_lifecycle_event,
  fiveHourTimeout = 18000000,
  fourHourTimeout = 14400000,
  thirtyMinuteTimeout = 1800000,
  defaultTimeout = 360000;

export let config: Config = {
  params: {
  },
  capabilities: {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    browserName: 'chrome',
    shardTestFiles: false,
    // Firefox Options
    'moz:fireFoxOptions': {
      args: ["--lang=en", "--start-maximized", "--window-size=1920,1080", "--headless", "--disable-gpu"]
    },
    // Chrome Options
    'goog:chromeOptions': {
      args: ["--lang=en", "--start-maximized", "--log-level=3", "--silent", "--disable-features=VizDisplayCompositor", "--pageLoadStrategy=none", "--window-size=1920,1080", "--headless", "--disable-gpu", '--disable-browser-side-navigation', '--unhandled-rejections=strict']
    },
  },
  // Suite patterns
  suites: {
    automationQaTest: './Specs/QaTest/qaTest.js'
  },

  framework: 'jasmine2',
  onPrepare: async () => {
    // Disables check for Angular
    await browser.waitForAngularEnabled(false),
    await browser.manage().timeouts().pageLoadTimeout(fourHourTimeout);
    // Maximize Window Screen
    //browser.driver.manage().window().maximize();
    beforeAll(async function () {
      // Set implicit wait globally. Specifies the amount of time the driver should wait when searching for an element if it is not immediately present.
      await browser.manage().timeouts().implicitlyWait(1000),
        // Default Timeout Set for Jasmine.
        jasmine.DEFAULT_TIMEOUT_INTERVAL = defaultTimeout;
    }),
      // Jasmine Spec reporter
      // Clean reports in Console, no stack trace errors
      jasmine.getEnv().clearReporters();
    // Initialises Jasmine Spec Reporter. 
    jasmine.getEnv().addReporter(
      new SpecReporter({
        customProcessors: [CustomProcessor],
      })
    ); // End Jasmine Spec Reporter
    // Jasmine HTML reporter, sets path where test results will be saved along with additional properties. 
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: `./testResults/${currentScript}/${time}/reports/`,
        //fileNameDateSuffix: true,
        consolidateAll: true,
        cleanDestination: false,
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: true,
        fixedScreenshotName: true
      }),
    ); // End Jasmine HTML Reporter
    // Jasmine XML reporter
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      cleanDestination: false,
      consolidateAll: true,
      savePath: `./testresults/${currentScript}/${time}/XML/`,
      useFullTestName: true,
      filePrefix: `xmlOutput`
    }));
    // Skip tests after first failure
    var specs = [];
    var orgSpecFilter = jasmine.getEnv().specFilter;
    jasmine.getEnv().specFilter = function (spec) {
      specs.push(spec);
      return orgSpecFilter(spec);
    };
    jasmine.getEnv().addReporter(new function () {
      this.specDone = function (result) {
        if (result.failedExpectations.length > 0) {
          specs.forEach(async function (spec) {
            await browser.sleep(100);
            await spec.disable();
          });
        }
      };
    });
  }, //End OnPrepare
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    // Use colors in the command line report.
    showColors: true,
    // Timeout Variable
    defaultTimeoutInterval: defaultTimeout,
    realtimeFailure: true
  }
}; // End Config
