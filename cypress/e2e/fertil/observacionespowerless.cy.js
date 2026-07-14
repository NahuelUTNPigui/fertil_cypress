import fertil from '../../fixtures/fertil.json'
describe('observaciones', () => {
    beforeEach("ingresa", () => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()

        cy.get('#username').type(fertil.userpowerless.fertilname)
        cy.get('#password').type(fertil.userpowerless.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(4000)
        //cy.get('.scrollbar-thin > .overflow-y-auto > :nth-child(8) > .flex')
        cy.contains('Observaciones').click()
        cy.once('uncaught:exception', (err) => {
            if (err.message.includes('SIN_PERMISO')) return false
            return true // Cualquier otro error falla el test normalmente
        })
        cy.wait(1000)
    })
    it("nueva obser", () => {

        cy.contains('+ Nueva observación').click()
        cy.once('uncaught:exception', (err) => {
            if (err.message.includes('SIN_PERMISO')) return false
            return true // Cualquier otro error falla el test normalmente
        })



    })
    it("editar obser", () => {
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
    it("eliminar obser", () => {
        cy.wait(1000)
        cy.get('tbody tr').first().find('td:nth-child(4)')
            .within(() => {
                // Dentro del 4to td, busca el segundo botón
                cy.get('button').eq(2).click()

            })
        cy.once('uncaught:exception', (err) => {
            if (err.message.includes('SIN_PERMISO')) return false
            return true // Cualquier otro error falla el test normalmente
        })
        cy.get('.swal2-confirm').click()
        cy.wait(2000)
        cy.get('.swal2-confirm').click()
    })
})