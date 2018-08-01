(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

given('I visit a valid {string} previous to test', function (url) {
	cy.visit(url);
	cy.contains('type').click();
	cy.url().should('contains', '/commands/actions');
});

when('I put my {string} in the field', function (email) {
	cy.get('.action-email').type('jaredwuliger@gmail.com');
});

then('My {string} should be valid', function (email) {
	cy.get('.action-email').should('have.value', email);
});

},{}]},{},[1]);
