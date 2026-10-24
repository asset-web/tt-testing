const menuItems = [
    'Home',
    'Project Information',
    'About The Team',
    'Project Details',
    'TORCH',
    'Researcher’s Notes',
];

Cypress.Commands.add('navigateMenu', (wrapperClass) => {
    cy.get(wrapperClass).scrollIntoView();
    menuItems.forEach((item) => {
        cy.get(wrapperClass).contains(item).click();
        cy.get(".page-title").contains(item);
    });
})

Cypress.Commands.add('navigateSubMenu', (wrapperClass, parentMenuItems, subMenuItems) => {
    cy.get(wrapperClass).scrollIntoView();
    subMenuItems.forEach((item) => {
        for (const parentMenu of parentMenuItems) {
            cy.get(wrapperClass).contains(parentMenu).trigger('mouseover');
        }
        cy.get(wrapperClass).contains(item).click();
        cy.get(".page-title").contains(item);
    });
})

Cypress.Commands.add('navigateProjectDetailsSubMenu', (wrapperClass) => {
    const subMenuItems = [
        'Project Sites',
        'Notes About the Set From Set Designer, Carol Sorhaindo',
        'Building The Performance Script',
        'References',
    ];
    cy.navigateSubMenu(wrapperClass, ["Project Details"], subMenuItems);
})

Cypress.Commands.add('navigateReferencesSubMenu', (wrapperClass) => {
    const subMenuItems = [
        'Quantum Moments',
    ];
    cy.navigateSubMenu(wrapperClass, ["Project Details", "References"], subMenuItems);
})

Cypress.Commands.add('navigatePublicEngagementsDetailsSubMenu', (wrapperClass) => {
    const subMenuItems = [
		"11th April Performance Day",
		"Open Rehearsal",
		"Video Showing 23 May",  // Has a shorten page title
		"The Discussion",
		"Discussion 2",
		"Pre-Performance Moments",
    ];
    cy.navigateSubMenu(wrapperClass, ["Project Details", "Public Engagements"], subMenuItems);
})
