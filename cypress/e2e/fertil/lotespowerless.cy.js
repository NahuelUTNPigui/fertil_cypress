import fertil from '../../fixtures/fertil.json'

describe('lotes', () => {
    beforeEach(() => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()

        cy.get('#username').type(fertil.userpowerless.fertilname)
        cy.get('#password').type(fertil.userpowerless.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(1000)
        cy.contains('Lotes').click()
    })
    it("nuevo lote", () => {

        cy.contains('+ Nuevo lote').click()
        cy.wait(1000)
        cy.contains('Volver').click()
        cy.contains('+ Nuevo lote').click()
        cy.once('uncaught:exception', (err) => {
            if (err.message.includes('SIN_PERMISO')) return false
            return true // Cualquier otro error falla el test normalmente
        })
        

    })
    it("editar lote", () => {

        // Busca el botón del lápiz dentro de la primera fila
        //cy.get('tbody tr').first().find('button[aria-label="Editar"], button[title="Editar"]').click()

        cy.get('tbody tr').first().find('td:nth-child(4)')
            .within(() => {
                // Dentro del 4to td, busca el segundo botón
                cy.get('button').eq(1).click()

            })
        cy.once('uncaught:exception', (err) => {
            if (err.message.includes('SIN_PERMISO')) return false
            return true // Cualquier otro error falla el test normalmente
        })

    })
    it("eliminar lote", () => {

        // Busca el botón del lápiz dentro de la primera fila
        //cy.get('tbody tr').first().find('button[aria-label="Editar"], button[title="Editar"]').click()
        cy.wait(2000)
        cy.get('tbody tr').first().find('td:nth-child(4)')
            .within(() => {
                // Dentro del 4to td, busca el segundo botón
                cy.get('button').eq(2).click()

            })
        cy.once('uncaught:exception', (err) => {
            if (err.message.includes('SIN_PERMISO')) return false
            return true // Cualquier otro error falla el test normalmente
        })

    })

})