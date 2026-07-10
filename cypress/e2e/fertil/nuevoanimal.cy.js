import fertil from '../../fixtures/fertil.json'
describe('ingresar fertil', () => {
    it("ingresa",()=>{
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()
        
        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(1200)
        //cy.get('.drawer-content > .navbar > .flex-none > .mx-1').click()
        
        //cy.get('.fixed > .grid > :nth-child(2)')
        cy.contains('Nuevo').click()
    })
    
})