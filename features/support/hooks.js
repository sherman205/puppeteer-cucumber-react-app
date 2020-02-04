const { After, AfterAll } = require('cucumber');
const scope = require('./scope');

After(async () => {
  if (scope.browser && scope.context.currentPage) {
    await scope.context.currentPage.close();
    scope.context.currentPage = null;
  }
});

AfterAll(async () => {
  if (scope.browser) await scope.browser.close();
});