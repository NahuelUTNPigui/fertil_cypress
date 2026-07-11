import fertil from '../../fixtures/fertil.json'
describe('nacimientos', () => {
    beforeEach("ingresa", () => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()

        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(4000)
        //cy.get('.scrollbar-thin > .overflow-y-auto > :nth-child(8) > .flex')
        cy.get('a').contains('Pesajes').click()
        cy.wait(1000)
    })
    it("nuevo pesaje", () => {
        cy.contains('+ Nuevo Pesaje').click()
        cy.wait(2000)
        cy.get("#fechapesaje").click()
        cy.get('.absolute > :nth-child(3) > :nth-child(3)').click()
        cy.get("#pesogeneral").type(fertil.pesajenuevo.peso)
        cy.get('tbody tr').first().find('label').click()
        cy.get('div.border-t.border-cf-border')
            .contains('button', 'Siguiente')
            .click()
        cy.get('.bg-cf-primary')
            .contains('button', 'Crear pesaje')
            .click()
        cy.wait(1000)
        cy.get('.swal2-confirm').click()
        cy.wait(2000)
    })
    it("editar pesajes", () => {
        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(1) // El índice 1 es el segundo botón = Pencil
                .click()
        })
        cy.wait(1000)
        cy.get("#pesonuevo").clear()
        cy.get("#pesonuevo").type(fertil.pesajenuevo.pesonuevo)
        cy.contains('Guardar cambios').click()
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
        cy.wait(1000)
        cy.get('.swal2-confirm').click()
    })
})