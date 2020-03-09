# puppeteer-cucumber-react-app

## Overview

A sample react application that demonstrates how to enable automated User Acceptance Cucumber tests for a browser-based front end. This testing strategy is a combination of:

1. Cucumber, a Behavior Driven Development (BDD) tool that allows you to write software requirements as specifications in a human-readable format
2. Puppeteer, a library that allows you to control Google Chrome (or Chromium) programmatically, using the dev tools protocol.

Together, these two Node.js modules provide powerful testing capability of a browser-based front end.

## Running locally

Start the development server -- it must be run on port 3000:
```
npm start
```

To run the cucumber tests and generate cucumber.json and cucumber.html reports:
```
npm run test:puppeteer
```
