describe('Commands', () => {
  it('navigates to Window', () => {
    cy.visit('https://example.cypress.io/commands/window');
    cy.contains('Window');
  });

  it('navigates to Viewport', () => {
    cy.visit('https://example.cypress.io/commands/viewport');
    cy.contains('Viewport');
  });

  it('navigates to Location', () => {
    cy.visit('https://example.cypress.io/commands/location');
    cy.contains('Location');
  });
});
