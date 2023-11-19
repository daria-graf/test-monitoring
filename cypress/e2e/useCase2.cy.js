describe('Utilities', () => {

  beforeEach('navigate to Utilities page', ()=> {
    cy.visit('https://example.cypress.io/utilities');
  });

  it('Cypress._', () => {
    cy.contains('Cypress._');
  });

  it('Cypress.$', () => {
    cy.contains('Cypress.$');
  });

  it('Cypress.Blob', () => {
    cy.contains('Cypress.Blob');
  });
});
