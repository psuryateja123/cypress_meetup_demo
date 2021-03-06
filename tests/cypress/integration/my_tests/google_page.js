describe('Google page test', function () {
    beforeEach(function () {
        cy.viewport('macbook-15');
    });

    it('Navigating to google home page', function () {
        cy.visit(Cypress.config().google_page)
    });

    it('To check if there is any image', function () {
        cy.get('#hplogo').hasOwnProperty('img')
    });

    // it('To check if there is alt text for image', function () {
    //
    //     cy.get('#hplogo').should('have.attr','alt','Google')
    // });

    it('To check for aria attributes for google search button', function () {

        cy.get('[type="submit"]').should('have.attr','aria-label', 'Google Search')

    });

    it('To see whether there is link for Gmail', function () {
        cy
            .get('.gb_e').should('have.attr', 'href')
            .should('not.be.empty');
    });

    it('Focus on Gmail', function () {
        cy
            .get('.gb_e').last().focus()
    });

    it('For running the axe tests', function () {
        cy
            .get('.gb_e').last().focus()
    });
});