import fertil from '../../fixtures/fertil.json'
describe('servicios', () => {
    beforeEach("ingresa", () => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()

        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(4000)
        //cy.get('.scrollbar-thin > .overflow-y-auto > :nth-child(8) > .flex')
        cy.get('a').contains('Servicios').click()
        cy.wait(1000)
    })
    it("nuevo servicio", () => {
        cy.contains('+ Nuevo servicio').click()
        cy.wait(2000)
        cy.get("#fechadesde").click()
        cy.get('.absolute > :nth-child(3) > :nth-child(3)').click()
        cy.get('[name="observacion"]').eq(0).type(fertil.servicionuevo.observacion)
        cy.get('tbody tr').first().find('label').click()
        cy.get('div.border-t.border-cf-border')
            .contains('button', 'Siguiente')
            .click()
        cy.get('.bg-cf-primary')
            .contains('button', 'Crear servicio')
            .click()
        cy.wait(1000)
        cy.get('.swal2-confirm').click()
        cy.wait(2000)
    })
    it("editar servicio", () => {
        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(1) // El índice 1 es el segundo botón = Pencil
                .click()
        })
        cy.wait(1000)
        cy.get('[name="observacion"]').eq(0).clear()
        cy.get('[name="observacion"]').eq(0).type(fertil.servicionuevo.observacionnuevo)
        cy.contains('Guardar cambios').click()
        cy.get('.swal2-confirm').click()

        cy.wait(1000)

    })
    it("eliminar servicio", () => {
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
        cy.wait(1000)
        cy.get('.swal2-confirm').click()
    })
})