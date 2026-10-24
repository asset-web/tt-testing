describe('Header', () => {
  it('Visit home page', () => {
    cy.visit('/');
    cy.contains('Transportation Transformation');
  });

  it('Navigate through top bar menu', () => {
    cy.visit('/');
    cy.navigateMenu('#top-menu');
    cy.navigateProjectDetailsSubMenu('#top-menu');
    cy.navigateReferencesSubMenu('#top-menu');
    cy.navigatePublicEngagementsDetailsSubMenu('#top-menu');
  });

  it('Navigate through main menu', () => {
    cy.visit('/');
    cy.navigateMenu('.main-menu-container');
    cy.navigateProjectDetailsSubMenu('.main-menu-container');
    cy.navigateReferencesSubMenu('.main-menu-container');
    cy.navigatePublicEngagementsDetailsSubMenu('.main-menu-container');
  });

});
