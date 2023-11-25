Cypress.on('uncaught:exception', (err, runnable) => {
    // Log the error to the Cypress command log
    Cypress.log({
        name: 'uncaughtException',
        message: err.message,
        consoleProps: () => {
            return { error: err };
        },
    });

    // Optionally, fail the test if needed
    // You can conditionally fail the test based on the error or other criteria
    // For example, you might want to fail the test if a specific error occurs
    if (err.message.includes('specificError')) {
        // This will fail the test
        throw err;
    }

    // Return false to prevent Cypress from failing the test
    return false;
});

//this can pass sensitive data stored in the env.json file you will need to create
Cypress.env();
Cypress.env('Username');
Cypress.env('Password');

const {
    exampleFunction,
    exampleConst
} = require('../../Helpers/testHelpers.cy.js');

describe('template spec', () => {
    it('visits the example website and performs actions', () => {
        // This is the correct place for Cypress commands
        cy.visit('https://example.cypress.io');

        cy.get('.banner')
            // Include assertions to validate the expected behavior
            .should('be.visible')
            .contains('Kitchen Sink')
            .should('exist');

        exampleFunction();
        cy.visit(exampleConst);
    });
});