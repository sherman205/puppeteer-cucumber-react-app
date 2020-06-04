const { BeforeAll, Before, After, AfterAll } = require('cucumber');
const puppeteer = require("puppeteer");
const scope = require('./scope');

const connectToBrowser = async() => {
  scope.browser = await puppeteer.launch({
    args: ['--no-sandbox']
  });
}

BeforeAll(async() => {
  if (process.env.SERVICE_ENDPOINT) {
    await connectToBrowser()
    .then(function() {
      console.log("Connection to Chrome browser established");
    })
    .catch(function(err) {
      console.log("Error connecting to browser: " + err.message);
    });
  }
  else {
    const defaultOptions = {
      headless: false,
      defaultViewport: null,
      args: [
        '--start-maximized',
        '--window-size=1920,1080'
      ]
    }

    scope.browser = await puppeteer.launch({...defaultOptions});
  }
});

Before(async() => {
  if (!scope.context.currentPage) {
    scope.context.currentPage = await scope.browser.newPage();
  }
  await scope.context.currentPage.goto(scope.host);
});

After(async() => {
  if (scope.browser && scope.context.currentPage) {
    await scope.context.currentPage.close();
    scope.context.currentPage = null;
  }
});

AfterAll(async() => {
  if (scope.browser) await scope.browser.close();
});