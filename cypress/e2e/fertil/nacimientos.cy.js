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
        cy.get('a').contains('Nacimientos').click()
        cy.wait(1000)
    })
    it("nuevo nacimiento con animal", () => {
        cy.contains('+ Nuevo nacimiento').click()
        cy.wait(2000)
        cy.get("#caravana").type(fertil.nacimientonuevo.caravana)
        cy.get("#fechanacimiento").click()
        cy.get(':nth-child(3) > :nth-child(3)').click()
        cy.get(".grid.grid-cols-2.gap-3").eq(3).within(() => {
            cy.get('.w-full').first().type(fertil.nacimientonuevo.madre)
            cy.get('.mt-0 > .border > :nth-child(1)').click()
            
        })
        cy.get('[name="observacion"]').eq(0).type(fertil.nacimientonuevo.observacion)
        cy.contains('Guardar nuevo').click()
        cy.contains('OK').click()
        cy.wait(1000)
    })
    it("nuevo nacimiento sin animal", () => {
        cy.contains('+ Nuevo nacimiento').click()
        cy.wait(2000)
        cy.contains('label', 'Registrar solo parto (no da de alta un animal)')
            .find('input[type="checkbox"]')
            .check() // Marca el checkbox
        cy.get("#fechanacimiento").click()
        cy.get(':nth-child(3) > :nth-child(3)').eq(1).click()
        cy.get(".grid.grid-cols-2.gap-3").eq(3).within(() => {
            cy.get('.w-full').first().type(fertil.nacimientonuevo.madre)
            cy.get('.mt-0 > .border > :nth-child(1)').click()
        })
        cy.get('[name="observacion"]').eq(0).type(fertil.nacimientonuevo.observacion)

        cy.contains('Guardar nuevo').click()
        cy.get('.swal2-confirm').click()
        cy.contains('OK').click()
        cy.wait(1000)
    })
    it("editar nacimiento", () => {
        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(1) // El índice 1 es el segundo botón = Pencil
                .click()
        })
        cy.wait(2000)
        cy.get('[name="observacion"]').eq(0).clear()
        cy.get('[name="observacion"]').eq(0).type(fertil.nacimientonuevo.observacionnuevo)
        cy.contains('Guardar cambios').click()
        cy.get('.swal2-confirm').click()

        cy.wait(1000)
    })
    it("eliminar nacimiento", () => {
        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(2) // El índice 1 es el segundo botón = Pencil
                .click()
        })
        cy.get('.swal2-confirm').click()
        cy.wait(2000)
        cy.get('.swal2-confirm').click()
    })
})