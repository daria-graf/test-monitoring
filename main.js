
const CypressRunner = require('./cypressRunner.js');

(async() => {

  let result;

  try {
    result = await CypressRunner.runSpecs('./cypress/e2e/*.cy.js');
    // TODO: replace with testRunner = new TestRunner(TestRunnerType.CYPRESS);
    // TODO: testRunner.runSpecs(specPath);
  } catch (error){
    console.error(`Main: ${error.message || error}`);
    // TODO: notify das DEV-Team about the errors in the test runner
    process.exit(1);
  }

  // TODO: save videos for the failed tests to archive
  
  /*const failedTests = CypressRunner.determineFailedTests(result);
  
    if(failedTests.length > 0){
      // TODO: notify das Team (QA, POs, DEV) about the failed Test per Slack
    }*/
  
  const metricsForSpec = CypressRunner.getMetricsForSpec(result);
  const metricsForEachTest = CypressRunner.getMetricsForEachTest(result);
  
  console.log('metricsForSpec: ', JSON.stringify(metricsForSpec));
  console.log('metricsForEachTest: ', JSON.stringify(metricsForEachTest));
  
  // TODO: send metrics to prometheus
 
  //await new Promise(resolve =>setTimeout(resolve, 1*60*1000));  
})();