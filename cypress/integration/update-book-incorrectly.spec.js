const { describe } = require("mocha");

describe('When user wants to update a book without putting inputs either name, author or both',() => {

    describe('When user wants to update a book without putting name',() => {
        before(() => {
            cy.visit('/');
            cy.wait(1000);
            cy.get('tr').eq(1).get('td').eq(3).click();
            cy.getBySel('inp-new-name').click().clear();
        });

        it('Then should be disabled button to update the book',() => {
            cy.getBySel('btn-new-save').should('be.disabled');
        });
    });

    describe('When user wants to update a book without putting author',() => {
        before(() => {
            cy.visit('/');
            cy.wait(1000);
            cy.get('tr').eq(1).get('td').eq(3).click();
            cy.getBySel('inp-new-author').click().clear();
        });

        it('Then should be disabled button to update the book',() => {
            cy.getBySel('btn-new-save').should('be.disabled');
        });
    });

    describe('When user wants to update a book without putting either name or author',() => {
        before(() => {
            cy.visit('/');
            cy.wait(1000);
            cy.get('tr').eq(1).get('td').eq(3).click();
            cy.getBySel('inp-new-name').click().clear();
            cy.getBySel('inp-new-author').click().clear();
        });

        it('Then should be disabled button to update the book',() => {
            cy.getBySel('btn-new-save').should('be.disabled');
        });
    });

});