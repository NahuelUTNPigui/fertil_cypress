import fertil from '../../fixtures/fertil.json'

describe('observaciones', () => {
    beforeEach(() => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()

        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(1000)
        cy.contains('Observaciones').click()
        cy.wait(1000)
    })
    it("nueva obser", () => {

        cy.contains('+ Nueva observación').click()
        cy.wait(1000)
        cy.get('.flex-col').eq(1).within(() => {
            // Dentro form el primer input
            cy.get('.w-full').first().type(fertil.observacionoff.caravana)
            cy.get('.text-start > .block').click()
            cy.get('#fecha').click()
            cy.get(':nth-child(3) > :nth-child(3)').click()
            cy.get('[name="observacion"]').type(fertil.observacionoff.observacion)
        })

        cy.contains('Guardar').click()
        cy.contains('OK').click()
        cy.wait(1000)



    })
    it("editar obser", () => {
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.get('tbody tr').first().find('td:nth-child(4)')
            .within(() => {
                // Dentro del 4to td, busca el segundo botón
                cy.get('button').eq(1).click()

            })
        cy.wait(2000)
        cy.get('.flex-col').eq(1).within(() => {
            cy.get('[name="observacion"]').clear()
            cy.get('[name="observacion"]').type(fertil.observacionnuevo.observacionnuevo)
        })
        cy.contains('Guardar cambios').click()
        cy.contains('OK').click()
        cy.wait(2000)
        cy.contains('Volver').click()
        cy.wait(2000)
    })
    it("eliminar obser", () => {
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.wait(1000)
        cy.get('tbody tr').first().find('td:nth-child(4)')
            .within(() => {
                // Dentro del 4to td, busca el segundo botón
                cy.get('button').eq(2).click()

            })
        cy.get('.swal2-confirm').click()
        cy.wait(2000)
    })
    it("nueva obser", () => {
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.contains('+ Nueva observación').click()
        cy.wait(1000)
        cy.get('.flex-col').eq(1).within(() => {
            // Dentro form el primer input
            cy.get('.w-full').first().type(fertil.observacionnuevo.caravana)
            cy.get('.text-start > .block').click()
            cy.get('#fecha').click()
            cy.get(':nth-child(3) > :nth-child(3)').click()
            cy.get('[name="observacion"]').type(fertil.observacionnuevo.observacion)
        })

        cy.contains('Guardar').click()
        cy.contains('OK').click()
        cy.wait(1000)



    })

})