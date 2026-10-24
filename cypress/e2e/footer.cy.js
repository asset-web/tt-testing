describe('Footer', () => {
  it('Test for the footer\'s expected content', () => {
    cy.visit('/');
    cy.get('footer').scrollIntoView();
    cy.contains('2026 Transportation Transformation: Migration, Teleportation, and Railways © All rights Reserved').should('be.visible');
    cy.contains('Back to top').should('be.visible').click();
    // cy.get('.fa-linkedin').click();
  });
});
