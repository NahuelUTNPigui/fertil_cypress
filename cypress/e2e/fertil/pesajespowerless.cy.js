import fertil from '../../fixtures/fertil.json'
describe('nacimientos', () => {
    beforeEach("ingresa", () => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()

        cy.get('#username').type(fertil.userpowerless.fertilname)
        cy.get('#password').type(fertil.userpowerless.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(4000)
        //cy.get('.scrollbar-thin > .overflow-y-auto > :nth-child(8) > .flex')
        cy.get('a').contains('Pesajes').click()
        cy.once('uncaught:exception', (err) => {
            if (err.message.includes('SIN_PERMISO')) return false
            return true // Cualquier otro error falla el test normalmente
        })
        cy.wait(1000)
    })
    it("nuevo pesaje", () => {
        cy.contains('+ Nuevo Pesaje').click()
        cy.once('uncaught:exception', (err) => {
            if (err.message.includes('SIN_PERMISO')) return false
            return true // Cualquier otro error falla el test normalmente
        })
    })
    it("editar pesajes", () => {
        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(1) // El índice 1 es el segundo botón = Pencil
                .click()
        })
        cy.wait(1000)
        cy.get('.swal2-confirm').click()
        

        cy.wait(1000)
    })
    it("eliminar pesaje", () => {
        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(2)
                .click()
        })
        cy.wait(1000)
        cy.get('.swal2-confirm').click()
    })
})