import fertil from '../../fixtures/fertil.json'
describe('ingresar fertil', () => {
    it("ingresa",()=>{
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()
        
        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(700)
        //cy.contains('Buen').should('have.text','Buen'.trim())
    })
    
})