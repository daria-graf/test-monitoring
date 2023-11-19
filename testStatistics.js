class TestStatisticsProSpec {
 
  /**
     * Create a new TestStatisticsProSpec
     * @param {string} specName - name of the spec file
     * @param {Date} specBeginTime - start date and time
     * @param {number} specDuration - spec running time
     * @param {0|1|2|3} aggrSpecResult - spec aggrigated result ( 0 = failed, 1 = passed, 2 = pending, 3 = skipped)
     */
  constructor(specName, specBeginTime, specDuration, aggrSpecResult){
    this.specName = specName;
    this.specBeginTime = specBeginTime;
    this.specDuration = specDuration;
    this.aggrSpecResult = aggrSpecResult;
  }
}

class TestStatisticsProTestInSpec {

  /**
     * Create a new TestStatistics
     * @param {string} specName - name of the spec file
     * @param {Date} specBeginTime - start date and time
     * @param {number} testDuration - test running time
     * @param {0|1|2|3} testResultSpec - test result ( 0 = failed, 1 = passed, 2 = pending, 3 = skipped)
     * @param {string} testErrorAsText - test error text
     */
  constructor(specName, specBeginTime, testDuration, testResult, testErrorAsText){
    this.specName = specName;
    this.specBeginTime = specBeginTime;
    this.testDuration = testDuration;
    this.testResult = testResult;
    this.testErrorAsText = testErrorAsText;
  }

}

module.exports = {
  TestStatisticsProSpec: TestStatisticsProSpec,
  TestStatisticsProTestInSpec: TestStatisticsProTestInSpec
};