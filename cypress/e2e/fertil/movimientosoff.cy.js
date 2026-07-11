import fertil from '../../fixtures/fertil.json'
describe('movimientos', () => {
    beforeEach("ingresa", () => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()

        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(4000)
        //cy.get('.scrollbar-thin > .overflow-y-auto > :nth-child(8) > .flex')
        cy.get('a').contains('Movimientos').click()
        cy.intercept('*').as('online') // Restaura el comportamiento por defecto
        cy.wait(1000)
    })
    it("nuevo movimiento", () => {
        cy.intercept('*').as('online') // Restaura el comportamiento por defecto
        cy.contains('+ Nuevo movimiento').click()
        cy.wait(2000)
        cy.contains('Categoría').click()
        cy.get('#cat-select').select(0, { force: true })
        cy.get('#cat-motivo').select(1, { force: true })
        cy.get('tbody tr').first().find('label').click()
        cy.get('div.border-t.border-cf-border')
            .contains('button', 'Siguiente')
            .click()
        cy.get('.bg-cf-primary')
            .contains('button', 'Crear movimiento')
            .click()
        cy.wait(1000)
        cy.get('.swal2-confirm').click()
    })
    it("editar movimiento", () => {
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(1) // El índice 1 es el segundo botón = Pencil
                .click()
        })
        cy.wait(1000)
        cy.contains('Guardar').click()
        cy.get('.swal2-confirm').click()

        cy.wait(1000)
    })
    it("eliminar movimiento", () => {
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(2) 
                .click()
        })
        cy.wait(1000)
        cy.get('.swal2-confirm').click()

        cy.wait(1000)
    })
    it("nuevo movimiento off", () => {
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.contains('+ Nuevo movimiento').click()
        cy.wait(2000)
        cy.contains('Categoría').click()
        cy.get('#cat-select').select(0, { force: true })
        cy.get('#cat-motivo').select(1, { force: true })
        cy.get('tbody tr').first().find('label').click()
        cy.get('div.border-t.border-cf-border')
            .contains('button', 'Siguiente')
            .click()
        cy.get('.bg-cf-primary')
            .contains('button', 'Crear movimiento')
            .click()
        cy.wait(1000)
        cy.get('.swal2-confirm').click()
    })
})