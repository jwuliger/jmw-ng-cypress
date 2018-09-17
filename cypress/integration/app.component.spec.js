import { page, visitable } from 'cypress-page-object';

const appPage = page({
  visit: visitable('localhost:4200'),
  pageTitle() {
    return cy.get('h1');
  },

  appVersion() {
    return cy.get('p');
  }
});

describe('App Page Test', function() {
  it('Contains The Header Welcome to Candy Land!', function() {
    appPage
      .visit()
      .pageTitle()
      .should('contain', 'Welcome to Candy Land!');
  });

  it('Contains App Version Number', function() {
    appPage
      .visit()
      .appVersion()
      .should('contain', 'v0.1.1');
  });
});
