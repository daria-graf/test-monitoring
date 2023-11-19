
const CypressRunner = require('./cypressRunner.js');

(async() => {
  let result;

  try {
    result = await CypressRunner.run('./cypress/e2e/useCase1.cy.js');
  } catch (error){
    console.log(error.message || error);
    process.exit(1);
  }

  console.log('bla');

  if (!result){
    process.exit(1);
  }

  console.log('result', result);
 
  
})();
