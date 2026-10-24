describe('Header', () => {
  it('Visit home page', () => {
    cy.visit('/');
    cy.contains('Transportation Transformation');
  });

  it('Navigate through top bar menu', () => {
    cy.visit('/');
    cy.navigateMenu('#top-menu');
  });

  it('Navigate through main menu', () => {
    cy.visit('/');
    cy.navigateMenu('.main-menu-container');
  });

});
