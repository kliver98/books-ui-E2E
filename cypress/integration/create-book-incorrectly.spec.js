const { describe } = require("mocha");
import book from '../fixtures/book.json';

describe('When user wants to add a book without filling inputs either name, author or both',() => {

    describe('When user wants to add a book without filling name',() => {
        before(() => {
            cy.visit('/');
            cy.getBySel('btn-add-book').click();
            cy.getBySel('inp-new-author').click().type(book.author);
        });

        it('Then should be disabled button to save the book',() => {
            cy.getBySel('btn-new-save').should('be.disabled');
        });
    });

    describe('When user wants to add a book without filling author',() => {
        before(() => {
            cy.visit('/');
            cy.getBySel('btn-add-book').click();
            cy.getBySel('inp-new-name').click().type(book.name);
        });

        it('Then should be disabled button to save the book',() => {
            cy.getBySel('btn-new-save').should('be.disabled');
        });
    });

    describe('When user wants to add a book without filling either name or author',() => {
        before(() => {
            cy.visit('/');
            cy.getBySel('btn-add-book').click();
        });

        it('Then should be disabled button to save the book',() => {
            cy.getBySel('btn-new-save').should('be.disabled');
        });
    });

});