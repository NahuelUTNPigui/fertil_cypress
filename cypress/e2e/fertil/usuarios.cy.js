import fertil from '../../fixtures/fertil.json'
describe('usuarios fertil', () => {
    beforeEach(() => {

        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()

        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(4000)
    })
    it("modificarusuarios",()=>{
        cy.visit("https://test.crecientefertil.com.ar/user/config");
        cy.contains('Editar información personal').click()
        cy.get('#apellido').clear()
        cy.get('#apellido').type("test2")
        cy.contains('Guardar').click()
        cy.contains('OK').click()
        cy.wait(1000)

        
    })
    
    
})