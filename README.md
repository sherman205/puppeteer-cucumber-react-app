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
npm run test:cucumber
```

## Running with docker-compose

The react app is dockerized, using the Dockerfile, and the cucumber tests are run in a separate docker container, outlined in Dockerfile.test.

To run the cucumber tests with Docker, use the `docker-compose-tests.yml` setup:

```
docker-compose -f docker-compose-tests.yml up --build
```

## Artifacts

Regardless of whether you run the cucumber tests locally or through Docker, two artifacts are generated: 

1. cucumber.json -- easy to parse
2. cucumber.html -- view results in a nice visual, user-friendly format