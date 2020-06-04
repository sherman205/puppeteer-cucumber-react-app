const { setWorldConstructor } = require("cucumber");
const scope = require('./scope');

const World = function() {
  if (process.env.SERVICE_ENDPOINT) {
    scope.host = `${process.env.SERVICE_ENDPOINT}`;
  }
  else {
    scope.host = "http://localhost:3000/";
  }
  scope.context = {};
}

setWorldConstructor(World);