const { setWorldConstructor } = require("cucumber");
const puppeteer = require("puppeteer");
const scope = require('./scope');

const World = function() {
  scope.host = "http://localhost:3000/";
  scope.driver = puppeteer;
  scope.context = {};
}

setWorldConstructor(World);