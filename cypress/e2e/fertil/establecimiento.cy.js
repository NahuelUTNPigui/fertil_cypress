import fertil from '../../fixtures/fertil.json'
describe('tactos', () => {
    beforeEach("ingresa", () => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()

        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(4000)
        //cy.get('.scrollbar-thin > .overflow-y-auto > :nth-child(8) > .flex')
        cy.get('a').contains('Establecimiento').click()
        cy.wait(1000)
    })
    it("editar establecimiento", () => {
        cy.contains('button', 'Editar establecimiento')
            .click()
        cy.wait(2000)
        cy.get("#nombre").clear()
        cy.get("#nombre").type(fertil.establecimiento.nombre)
        cy.contains('button', 'Guardar cambios')
            .click()
        cy.wait(2000)
        cy.get('.swal2-confirm').click()
        cy.wait(1000)
    })
})