const cypress = require('cypress');

(async() => {
  const results = await cypress.run({
    spec: './cypress/e2e/useCase1.cy.js'
  });

  if (results.status === 'failed') {
    console.error('Cypress could not run');
  } else {
    console.log('results.runs', results?.runs);
    // convert result to prometheus and send them to grafana
  }
})();
