import fertil from '../../fixtures/fertil.json'

describe('rodeos', () => {
    beforeEach(() => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()
        
        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(1000)
        cy.contains('Rodeos').click()
    })
    it("nuevo rodeo",()=>{
        cy.intercept('*').as('online') 
        cy.contains('+ Nuevo rodeo').click()
        cy.wait(1000)
        cy.contains('Volver').click()
        cy.contains('+ Nuevo rodeo').click()
        cy.get("#nombre").type(fertil.rodeooff.nombre);
        cy.contains('Guardar nuevo').click()
        cy.contains('OK').click()
        //El rodeo "rodeooff" aparece en la tabla con TOTAL = 0
        cy.contains('td', fertil.rodeooff.nombre).should('be.visible')
        cy.wait(2000)
    })
    it("editar rodeo",()=>{
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.get('tbody tr').first().find('td:nth-child(4)')
        .within(() => {
            // Dentro del 4to td, busca el segundo botón
            cy.get('button').eq(1).click()
            
        })
        cy.wait(2000)
        cy.get("#nombre").clear();
        cy.get("#nombre").type(fertil.rodeonuevo.nombrenuevo);
        cy.contains('Guardar edición').click()

        cy.contains('OK').click()
        cy.wait(3000)
        cy.contains('Volver').click()
        cy.contains('td', fertil.rodeonuevo.nombrenuevo).should('be.visible')
        cy.wait(3000)
    })
    it("eliminar rodeo",()=>{
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
    it("nuevo rodeo off",()=>{
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.contains('+ Nuevo rodeo').click()
        cy.wait(1000)
        cy.contains('Volver').click()
        cy.contains('+ Nuevo rodeo').click()
        cy.get("#nombre").type(fertil.rodeonuevo.nombre);
        cy.contains('Guardar nuevo').click()
        cy.contains('OK').click()
        
        cy.wait(2000)
    })
    
})