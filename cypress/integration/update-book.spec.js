const { describe } = require("mocha");
import book from '../fixtures/book.json';

let response;
const updatedBook = {
    "id":book.id,
    "name":"Updated name: "+book.name,
    "author":"Updated author: "+book.author

}
describe('Given a created book when the user wants to update that book',() => {

    before(() => {
        cy.intercept('POST', '/books').as('new-book')
        cy.visit('/');
        cy.get('.ant-select-selection-item').click() //With the pagination, should do Conditional Testing and it's not a good idea for e2e
        cy.contains('50 / page').click()
        cy.getBySel('btn-add-book').click();
        cy.getBySel('inp-new-name').click().type(book.name);
        cy.getBySel('inp-new-author').click().type(book.author);
        cy.getBySel('btn-new-save').click();
        cy.wait('@new-book').then((int) => {
            book.id = int.response.body.id;
            updatedBook.id = int.response.body.id;
        })
        
    })

    describe('When user wants to update the book',() => {
        before(() => {
            cy.intercept('PUT', '/books/**').as('updated-book')
            cy.visit('/');
            cy.get('.ant-select-selection-item').click() //With the pagination, should do Conditional Testing and it's not a good idea for e2e
            cy.contains('50 / page').click()
            cy.getBySel(`tr-book-${book.id}`).within(() => {
                cy.get('td').eq(3).click();
            });
            cy.getBySel('inp-new-name').click().clear().type(updatedBook.name);
            cy.getBySel('inp-new-author').click().clear().type(updatedBook.author);
            cy.getBySel('btn-new-save').click();
            cy.wait('@updated-book').then((int) => response = int.response)
            
        })

        it('Then status code should be 200 OK',() => {
            expect(response.statusCode).to.equal(200); //Not set 201 created in backend. Recommended
        })

        it('Then [name,author] are the updated values',() => {
            let resBook = response.body;
            expect(resBook).to.deep.equal(updatedBook);
        });
    });

});