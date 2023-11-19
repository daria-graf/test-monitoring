import { ResultsConverter } from './resultsConverter';

export function CypressResultsConverter() {
  /** @type {import ('./resultsConverter').TestResult */
  const testResult = new ResultsConverter();

  /**
   * @param {import("@cypress/cli/types/cypress-npm-api").CypressCommandLine.CypressRunResult | import("@cypress/cli/types/cypress-npm-api").CypressRunResult.CypressFailedRunResult } result
   */
  function translateTestResultToMetrics(result) {
    testResult.testName = result.reporter;
    testResult.testExecutionTime = result.stats.duration;
    testResult.testResult = transalteTestStatusToNumbers(result.stats);
  }

  function transalteTestStatusToNumbers(stats) {
    if (stats.totalFailed > 0) {
      return 0;
    }
    if (stats.totalPassed > 0) {
      return 1;
    }
    if (stats.totalPending > 0) {
      return 2;
    }
    if (stats.totalSkipped > 0) {
      return 3;
    }
  }

  return { translateTestResultToMetrics };
}
