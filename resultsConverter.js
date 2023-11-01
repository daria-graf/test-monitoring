/**
 * @typedef TestResult
 * @type {object}
 * @property {string} testName - name of the spec file
 * @property {string} testExecutionTime - test running time
 * @property {0|1|2|3} testResult - test result ( 0 = failed, 1 = passed, 2 = pending, 3 = skipped)
 */

export function ResultsConverter() {
  /** @type {TestResult} */
  const testResult = {
    testName: '',
    testExecutionTime: '',
    testResult: 0
  };

  return { testResult };
}
