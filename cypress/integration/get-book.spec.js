const { describe } = require("mocha");

let response;
describe('When user enter the web page and see all books',() => {

    before(() => {
        cy.intercept('GET', '/books').as('books')
        cy.visit('/');
        cy.get('.ant-select-selection-item').click() //With the pagination, should do Conditional Testing and it's not a good idea for e2e
        cy.contains('50 / page').click()
        cy.wait('@books').then((int) => response=int.response)
    })

    it('Then status code should be 200 OK',() => {
        expect(response.statusCode).to.equal(200); //Not set 201 created in backend. Recommended
    })

    it('Then display more than 0 books',async() => { //More than 0 because by default are 20
        cy.get('tr').within(rowsOfBooks => {
            let numRows = Object.keys(rowsOfBooks).length;
            expect(numRows).to.be.greaterThan(1) //1 because first it's the header [0,1,...n-1]
        });
    });

});