describe("form tests", ()=>{
    beforeEach(() => {
        cy.visit('/forms')
    })
    it("Test subscribe form", ()=>{
        cy.contains(/Testing Forms/i)
        cy.getDataTest('subscribe-form').find('input').as("subscribe-input")
        cy.get("@subscribe-input").type('martinjason2212@gmail.com')
        cy.contains(/Successfully subbed: martinjason2212@gmail.com!/i).should('not.exist').as("not-exist")
        cy.get('[data-test="subscribe-button"').click()
        cy.contains(/Successfully subbed: martinjason2212@gmail.com!/i).should('exist').as("exist")
        cy.wait(3000)
        cy.get("@not-exist")

        cy.get("@subscribe-input").type('martinjason2212@gmail.io')
        cy.contains(/Invalid email: martinjason2212@gmail.io!/i).should('not.exist')
        cy.get('[data-test="subscribe-button"').click()
        cy.contains(/Invalid email: martinjason2212@gmail.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: martinjason2212@gmail.io!/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.get('[data-test="subscribe-button"').click()
        cy.contains(/fail!/i).should('exist')
        cy.wait(3000)
        cy.contains(/fail!/i).should('not.exist')
    })
})