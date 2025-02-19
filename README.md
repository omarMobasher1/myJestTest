# Jest Installation Guide

This guide provides step-by-step instructions to install and configure Jest for testing, including Jest-JUnit for reporting and `npm-run-all` to run multiple scripts.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (with npm)
- A project initialized with `npm init -y`

## Installation Steps

### 1. Install Jest
Jest is a JavaScript testing framework. To install it, run:

```sh
npm install --save-dev jest
```

To verify installation, check the Jest version:
```sh
npx jest --version
```

### 2. Install Jest-JUnit Reporter
[Jest-JUnit](https://www.npmjs.com/package/jest-junit) is a Jest reporter that generates test results in JUnit format.

```sh
npm install --save-dev jest-junit
```
### 3. Install npm-run-all
[`npm-run-all`](https://www.npmjs.com/package/npm-run-all) allows running multiple npm scripts in parallel or sequentially, even if a test fails.

Install it using:

```sh
npm install --save-dev npm-run-all
```

### 4. Running Jest with npm-run-all
Modify the `scripts` section of `package.json` to use `npm-run-all`:

```json
"scripts": {
"runTest": "npm install --force && jest",
"report": "npx open-cli ./reports/test-report.html",
"test": "run-s --continue-on-error runTest report"
}
```

Run all tests with:

```sh
npm run test
```

This ensures tests execute even if one fails, and results are generated in JUnit format.

## Running Jest Tests
Run tests using:

```sh
npm test
```


## Conclusion
You have successfully installed Jest, Jest-JUnit, and `npm-run-all` to run and manage your test scripts effectively.

