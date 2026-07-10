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
        
        cy.contains('+ Nuevo lote').click()
        cy.wait(1000)
        cy.contains('Volver').click()
        cy.contains('+ Nuevo lote').click()
        cy.get("#nombre").type(fertil.lotenuevo.nombre);
        cy.contains('Guardar nuevo').click()
        cy.contains('OK').click()
        //El lote "lotenuevo" aparece en la tabla con TOTAL = 0
        cy.contains('td', fertil.lotenuevo.nombre).should('be.visible')
        cy.wait(2000)
        
    })
    it("editar lote",()=>{
        
        // Busca el botón del lápiz dentro de la primera fila
        //cy.get('tbody tr').first().find('button[aria-label="Editar"], button[title="Editar"]').click()
        
        cy.get('tbody tr').first().find('td:nth-child(4)')
        .within(() => {
            // Dentro del 4to td, busca el segundo botón
            cy.get('button').eq(1).click()
            
        })
        cy.wait(2000)
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
        
        // Busca el botón del lápiz dentro de la primera fila
        //cy.get('tbody tr').first().find('button[aria-label="Editar"], button[title="Editar"]').click()
        cy.wait(2000)
        cy.get('tbody tr').first().find('td:nth-child(4)')
        .within(() => {
            // Dentro del 4to td, busca el segundo botón
            cy.get('button').eq(2).click()
            
        })
        cy.get('.swal2-confirm').click()
        cy.wait(2000)
        
    })
    
})