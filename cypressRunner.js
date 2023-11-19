const cypress = require('cypress');
const {TestStatisticsProSpec, TestStatisticsProTestInSpec} = require('./testStatistics.js');

/**
 * @async
 * @param {string} specFile - Spec file
 * @return {Promise}
 * @throws Will throw an exception if no argument, no test results or problems running the test
 */
async function runSpec(specFile){
  if (!specFile){
    throw new Error('CypressRunner.runSpec: The argument specFile is missing.');
  }

  try {
    const result = await cypress.run({
      spec: specFile
    });
  
    if (!result){
      throw new Error(`CypressRunner.runSpec: Some unexpected errors when running cypress tests. Reason: ${result}`); 
    }
    if (result.status === 'failed') {
      // CypressFailedRunResult object will be returned
      throw new Error(`CypressRunner.runSpec: Cypress could not run at all (e.g. no spec files to run). Reason: ${result.message}`);
    } 
    if (result.runs[0]?.error) {
      throw new Error(`CypressRunner.runSpec: Some code error inside the cypress spec-test file. Fix the error and rerun the test. Details: ${result.runs[0]?.error}`);
    }
    return result;

  } catch (error){
    throw new Error(`CypressRunner.runSpec: Uknown error while running the programm (e.g. browser crash, module dependency missing). Reason: ${error.message || error}`);
  }

}

/**
 * @async
 * @param {string} specFiles - Spec files
 * @return {Promise}
 * @throws Will throw an exception if no argument, no test results or problems running the test
 */
async function runSpecs(specFiles){
  if (!specFiles){
    throw new Error('CypressRunner.runSpec: The argument specFiles is missing.');
  }

  try {
    const result = await cypress.run({
      spec: specFiles
    });
  
    if (!result){
      throw new Error(`CypressRunner.runSpecs: Some unexpected errors when running cypress tests. Reason: ${result}`); 
    }
    if (result.status === 'failed') {
      // CypressFailedRunResult object will be returned
      throw new Error(`CypressRunner.runSpecs: Cypress could not run at all (e.g. no spec files to run). Reason: ${result.message}`);
    } 
    if (result.runs.some(spec => spec.error !== null && spec.error !== 'undefined')) {
      throw new Error('CypressRunner.runSpecs: Some code error inside the cypress spec-test file. Fix the error and rerun the test.');
    }
    return result;

  } catch (error){
    throw new Error(`CypressRunner.runSpecs: Uknown error while running the programm (e.g. browser crash, module dependency missing). Reason: ${error.message || error}`);
  }

}

function getMetricsForSpec(result){
  return createMetrics(result);
}

function getMetricsForEachTest(result){
  return createMetrics(result, false);
}

//private
function createMetrics(result, onlyForSpec = true){
  if (!result){
    throw new Error('CypressRunner.getMetrics: The argument result is missing.');
  }

  let metrics = [];

  if (onlyForSpec){
    result.runs.forEach((run) => {
      metrics.push(new TestStatisticsProSpec(run.spec.fileName, run.stats.startedAt, run.stats.duration, transalteSpecResultToNumber(run.stats)));
    });
  } else {
    result.runs.forEach((run) => {
      run.tests.forEach(test => {
        metrics.push(new TestStatisticsProTestInSpec(run.spec.fileName, run.stats.startedAt, test.duration, transalteTestResultToNumber(test.state), test.displayError ?? ''));
      });
    });
  }

  return metrics;
}

// private
function transalteSpecResultToNumber(stat) {

  if (stat.failures > 0) {
    return 0;
  }
  if (stat.passes > 0) {
    return 1;
  }
  if (stat.pending > 0) {
    return 2;
  }
  if (stat.skipped > 0) {
    return 3;
  }
}


// private
function transalteTestResultToNumber(state) {
  const resultMap = {
    'failed': 0,
    'passed': 1,
    'pending': 2,
    'skipped': 3
  };

  return resultMap[state];
}

module.exports = {runSpec, runSpecs, getMetricsForSpec, getMetricsForEachTest};