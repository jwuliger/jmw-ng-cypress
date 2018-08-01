given('I visit a valid {string} previous to test', url => {
	cy.visit(url);
	cy.contains('type').click();
	cy.url().should('contains', '/commands/actions');
});

when('I put my {string} in the field', email => {
	cy.get('.action-email').type('jaredwuliger@gmail.com');
});

then('My {string} should be valid', email => {
	cy.get('.action-email').should('have.value', email);
});
