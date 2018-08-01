describe('This is my first test', function() {
	it('Visit a web page called Kitchen Sink', function() {
		cy.visit('https://example.cypress.io');
		cy.contains('type').click();
		cy.url().should('contains', '/commands/actions');
	});
	it('This is a second step', function() {
		cy.get('.action-email')
			.type('jaredwuliger@gmail.com')
			.should('have.value', 'jaredwuliger@gmail.com');
	});
});

// This is other test
describe('This is a new fake test', function() {
	it('Visit the previous page again and make other actions', function() {
		cy.visit('https://example.cypress.io');
		cy.contains('select').click();
		cy.url().should('contains', '/commands/actions');
		cy.get('.action-select').select('apples');
	});
});
