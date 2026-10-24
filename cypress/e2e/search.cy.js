describe('Searching', () => {
  it('Search site for mentions of the author', () => {
    cy.visit('/');
    cy.get('.fas.fa-search').click();
    cy.get('#page-header input[name="s"]').type('Carol Webster{enter}');
    cy.contains('Carol Marie Webster – Researcher’s Notes').should('be.visible');
    cy.contains('About The Team').should('be.visible');
  });
});
