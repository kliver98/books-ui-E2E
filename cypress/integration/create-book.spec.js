const { describe } = require("mocha");
import book from '../fixtures/book.json';

let response;
describe('When the user wants to add a book',() => {

    before(() => {
        cy.intercept('POST', '/books').as('new-book')
        cy.visit('/');
        cy.get('.ant-select-selection-item').click() //With the pagination, should do Conditional Testing and it's not a good idea for e2e
        cy.get('[ng-reflect-value="50"]').click()
        cy.getBySel('btn-add-book').click();
        cy.getBySel('inp-new-name').type(book.name);
        cy.getBySel('inp-new-author').type(book.author);
        cy.getBySel('btn-new-save').click();
        cy.wait('@new-book').then((int) => response=int.response)
        
    })
    
    it('Then status code should be 200 OK',() => {
        expect(response.statusCode).to.equal(200); //Not set 201 created in backend
    })
    
    it('Then the book should be listed with the [name, author]',() => {
        let id = response.body.id;
        cy.getBySel(`txt-name-book-${id}`).should('have.text',book.name);
        cy.getBySel(`txt-author-book-${id}`).should('have.text',book.author);
    })

});