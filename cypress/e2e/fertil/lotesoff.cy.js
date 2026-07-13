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
    //este es un test para agregar lotes si no tenes ninguno, util para hacer pruebas de corrido
    it("nuevo lote",()=>{
        cy.intercept('*').as('online') 

        cy.contains('+ Nuevo lote').click()
        cy.wait(1000)
        cy.contains('Volver').click()
        cy.contains('+ Nuevo lote').click()
        cy.get("#nombre").type(fertil.loteoff.nombre);
        cy.contains('Guardar nuevo').click()
        cy.contains('OK').click()
        cy.wait(1000)
        //El lote "lotenuevo" aparece en la tabla con TOTAL = 0
        cy.contains('td', fertil.loteoff.nombre).should('be.visible')
        cy.wait(2000)
        
    })
    it("editar lote",()=>{
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.get('tbody tr').first().find('td:nth-child(4)')
        .within(() => {
            // Dentro del 4to td, busca el segundo botón
            cy.get('button').eq(1).click()
            
        })
        cy.get("#nombre").clear();
        cy.get("#nombre").type(fertil.lotenuevo.nombrenuevo);
        
        cy.contains('Guardar edición').click()
        cy.contains('OK').click()
        cy.wait(2000)
        cy.contains('Volver').click()
        cy.contains('td', fertil.lotenuevo.nombrenuevo).should('be.visible')
        cy.wait(2000)
        
    })
    it("eliminar lote",()=>{
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.wait(2000)
        cy.get('tbody tr').first().find('td:nth-child(4)')
        .within(() => {
            // Dentro del 4to td, busca el segundo botón
            cy.get('button').eq(2).click()
            
        })
        cy.get('.swal2-confirm').click()
        cy.wait(2000)
        
    })
    it("nuevo lote off",()=>{
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.contains('+ Nuevo lote').click()
        cy.wait(1000)
        //  BLOQUEAR TODA LA RED DESDE ACÁ
        cy.intercept('*', { forceNetworkError: true }).as('offline')
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