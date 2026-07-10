import fertil from '../../fixtures/fertil.json'
describe('ingresar fertil', () => {
    beforeEach(() => {
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()
        
        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(700)
    })
    it("click lotes",()=>{
        cy.contains('Lotes').click()
        let elementos = cy.get('[href="/lotes"]')
        cy.log(elementos)
        
        
    })
    
})