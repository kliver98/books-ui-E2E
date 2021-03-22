const { describe } = require("mocha");
const catName="Cat test"

describe('When the user wants to add a book',() => {

    before(() => {
        cy.visit('/');
        cy.getBySel('btn-add-book').click();

    })

    it('Then ...',() => {
        cy.get(`[data-testid="${catName}-container"] [name="name-cat"]`).should('have.text',catName);
    })

});