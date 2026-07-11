import fertil from '../../fixtures/fertil.json'

describe('lotes', () => {
    beforeEach(() => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()
        
        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(1000)
        cy.contains('Lotes').click()
    })
    it("nuevo lote",()=>{
        cy.wait(5000)
        //  BLOQUEAR TODA LA RED DESDE ACÁ
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.contains('+ Nuevo lote').click()
        cy.wait(1000)
        cy.contains('Volver').click()
        cy.contains('+ Nuevo lote').click()
        cy.get("#nombre").type(fertil.lotenuevo.nombre);
        cy.contains('Guardar nuevo').click()
        cy.contains('OK').click()
        cy.wait(1000)
        //El lote "lotenuevo" aparece en la tabla con TOTAL = 0
        cy.contains('td', fertil.lotenuevo.nombre).should('be.visible')
        cy.wait(2000)
        
    })
})