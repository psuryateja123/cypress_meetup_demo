describe('Selecting two products for comparision', function () {
    beforeEach(function () {
        cy.viewport('macbook-15');
    });

    it('Navigate to the home page', function () {
        cy.visit(Cypress.config().google_page)
    });

    it('Checking if cherry item exits', function () {
        cy.get('#root > div > div > div > div.row.mt-3').first().children().children()
            .should('have.class','product ')
            .contains('Cherry')
    });

    it('Checking if Orange item exits', function () {
        cy.get('#root > div > div > div > div.row.mt-3').first().children().children()
            .should('have.class','product ')
            .contains('Orange')
    });

    it('clicking on cherry item', function () {
        cy.get('#root > div > div > div > div.row.mt-3').first().children().children()
            .should('have.class','product ')
            .first()
            .children()
            .should('have.class','view_details').contains('Compare').click()
    });

    it('Checking on Orange item for compare text before clicking', function () {
        cy.get(':nth-child(2) > .product > .view_details').contains('Compare')
    });

    it('Clicking on Orange item', function () {
        cy.get(':nth-child(2) > .product > .view_details').click()
    });

    it('Checking the price of cherry in table', function () {
        cy.get('.price > :nth-child(2)')
            .should('have.text', '$1.99')
            .get('.thead-default > tr > :nth-child(2)').contains('Cherry')
    });
//
    it('Checking the price of cherry in table', function () {
        cy.get('.price > :nth-child(3)')
            .should('have.text', '$2.99')
            .get('.thead-default > tr > :nth-child(3)').contains('Orange')
    });

    // test 2 for checking the text remove exists before clicking on selected item

    it('Removing the selecting for Cherry', function () {
        cy.get(':nth-child(1) > .product > .view_details').contains('Remove').click()
            .contains('Compare')
    });

    it('Removing the selecting for Orange', function () {
        cy.get(':nth-child(2) > .product > .view_details').contains('Remove').click()
            .contains('Compare')
    });

});