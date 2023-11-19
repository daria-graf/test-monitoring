describe('Commands', () => {
  it('navigates to Window', () => {
    cy.visit('https://example.cypress.io/commands/window');
    cy.contains('Window');
  });

  it('navigates to Viewport - failed', () => {
    cy.visit('https://example.cypress.io/commands/viewport');
    cy.contains('Viewports');
  });

  it('navigates to Location - skipped', () => {
    cy.visit('https://example.cypress.io/commands/location');
    cy.contains('Location');
  });
});
