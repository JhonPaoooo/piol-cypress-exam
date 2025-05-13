
Cypress.Commands.add('register', (user)=>{
            cy.get('#username').should('be.visible').type(user.username)
            cy.get('#email').should('be.visible').type(user.fakeEmail)
            cy.get('#password').should('be.visible').type(user.password)
            cy.get('#confirmPassword').should('be.visible').type(user.password)
})