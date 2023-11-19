const cypress = require('cypress');

async function run(specFile){
  if (!specFile){
    throw new Error('The argument specFile is missing.');
  }

  try {
    const result = await cypress.run({
      spec: specFile
    });
  
    if (!result){
      throw new Error(`Some unexpected errors when running cypress tests. Reason: ${result}`); 
    }
    if (result.status === 'failed') {
      // CypressFailedRunResult object will be returned
      throw new Error(`Cypress could not run at all (e.g. no spec files to run). Reason: ${result.message}`);
    } 
    if (result.runs[0]?.error) {
      throw new Error(`Some code error inside the cypress spec-test file. Fix the error and rerun the test. Details: ${result.runs[0]?.error}`);
    }
    return result;

  } catch (error){
    throw new Error('Uknown error while running the programm (e.g. browser crash, module dependency missing). Reason:', error.message || error);
  }
}

module.exports = {run};