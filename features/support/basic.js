const scope = require('./scope');
const expect = require('expect');

const checkHome = async() => {
  let checkUrl = await scope.context.currentPage.evaluate(() => location.href);
  expect(checkUrl).toMatch(scope.host);
};

const fillForm = async() => {
  const { currentPage } = scope.context;
  const inputSelector = ".signup-form";
  await currentPage.waitForSelector(inputSelector);
  await currentPage.click("input[name=name]");
  await currentPage.type("input[name=name]", "Harry Potter");
  await currentPage.click("input[name=email]");
  await currentPage.type("input[name=email]", "harry@hogwarts.com");
  return await currentPage.click("input[type=submit]");
};

const checkFormSubmission = async() => {
  const { currentPage } = scope.context;
  const resultSelector = ".result";
  await currentPage.waitForSelector(resultSelector);
  const result = await currentPage.evaluate(
    resultSelector => document.querySelector(resultSelector).innerText,
    resultSelector
  );
  expect(result).toBe("Form submitted!");
};

module.exports = {
  checkHome,
  fillForm,
  checkFormSubmission
};
