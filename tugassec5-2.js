describe('My First Test', () =>{
    it('clicking "type" shows the right heading', () => {
        cy.visit('https://example.cypress.io')
        //cy.pause() karena ini akan membuat pengecekan terpause
        cy.contains("type").click()
       cy.url().should("includes","/commands/actions")
       cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
    })
    
}

)
