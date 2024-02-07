# Testing with Jest

The project includes task_3.2.2.js and corresponding unit tests in task_3.2.2.test.js written in Jest framework.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
  - [Using npm](#using-npm)
  - [Jest CLI](#jest-cli)
- [Code Coverage](#code-coverage)
  - [Installation](#installation-of-coverage-plugin)
  - [Running Tests with Coverage](#running-tests-with-coverage)
  - [Types of code coverage](#types-of-code-coverage)

## Prerequisites
Before running the tests, make sure you have the following prerequisites installed on your machine:
- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): [Installation Guide](https://www.npmjs.com/get-npm)

## Installation
To set up the project and install the required dependencies, follow these steps:
1. Clone the repository: `git clone https://github.com/olga-supranovich/hometask-jest.git`
2. Navigate to the project directory: `cd your-project`
3. Install dependencies: `npm install`


## Running Tests
### Using npm
Execute the following command to run the Jest tests with npm:
```bash
npm run test
```

### Jest CLI
If you prefer running tests using the Jest command-line interface (CLI), you can use:
```bash
npx jest
```

## Code coverage

To identify areas that may lack proper testing we use code coverage that measures the percentage of source code our tests execute. 
### Installation of Coverage Plugin
For code coverage analysis, we use the babel-plugin-istanbul plugin. To install it, run the following command:
```
npm install --save-dev babel-plugin-istanbul
```
Make sure to check if it's already listed in the devDependencies section of your package.json file.

### Running Tests with Coverage
To run tests with code coverage and generate a detailed report, use the following command:
```bash
npx jest --coverage
```
This command will execute Jest and generate coverage metrics for your codebase. You can view a detailed HTML report by opening the coverage report file in your browser. It's generated here **'your-project/coverage/lcov-report/index.html'**.
This HTML report provides insights into different coverage metrics, such as statements, functions, branches, and lines, helping you assess the comprehensiveness of your tests and identify areas that may need more attention.

