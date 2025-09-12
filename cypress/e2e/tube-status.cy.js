describe('TubeStatus Component E2E', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays the main title', () => {
    cy.contains('London Underground Status').should('be.visible');
  });

  it('shows the last updated time', () => {
    cy.contains('Last updated:').should('be.visible');
  });

  it('renders the tube lines grid', () => {
    cy.get('[data-testid="tube-grid"]').should('exist');
    cy.get('[data-testid="tube-grid"] li').should('have.length.greaterThan', 0);
  });

  it('renders at least one line name and status', () => {
    cy.get('[data-testid="tube-grid"] li').first().within(() => {
      cy.get('h2').should('exist');
      cy.get('[role="status"]').should('exist');
    });
  });
});
