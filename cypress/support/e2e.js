Cypress.Commands.add('navigateMenu', (wrapperClass) => {

    cy.contains('Home').should('be.visible');
    cy.get(wrapperClass).contains('Home').should('be.visible');

    cy.contains('Project Information').should('be.visible').click();
    cy.get(wrapperClass).contains('Project Information').should('be.visible');

    cy.contains('About The Team').should('be.visible').click();
    cy.get(wrapperClass).contains('About The Team').should('be.visible');

    cy.contains('Project Details').should('be.visible').click();
    cy.get(wrapperClass).contains('Project Details').should('be.visible');

    cy.contains('TORCH').should('be.visible').click();
    cy.get(wrapperClass).contains('TORCH').should('be.visible');

    cy.contains('Researcher’s Notes').should('be.visible').click();
    cy.get(wrapperClass).contains('Researcher’s Notes').should('be.visible');
})