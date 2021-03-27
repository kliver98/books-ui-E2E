const { describe } = require("mocha");

describe('When user wants to delete a book without selecting any',() => {

    before(() => {
        cy.visit('/');
    });

    it('Then should be disabled button to delete books',() => {
        cy.getBySel('btn-delete-books').should('be.disabled');
    });

});