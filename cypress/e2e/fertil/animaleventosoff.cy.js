import fertil from '../../fixtures/fertil.json'
describe('animales EVENTOS', () => {
    beforeEach("ingresa", () => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()

        cy.get('#username').type(fertil.useroff.fertilname)
        cy.get('#password').type(fertil.useroff.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(4000)
        //cy.get('.scrollbar-thin > .overflow-y-auto > :nth-child(8) > .flex')
        cy.get('a').contains('Animales').click()
        cy.wait(1000)
    })
    it("eventos animal", () => {
        cy.wait(2000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.contains('+ Nuevo animal').click()
        cy.wait(2000)
        cy.get('#caravana').type(fertil.animalnuevo.caravana)
        cy.wait(2000)
        cy.get('div.mt-6.flex.space-x-3.justify-end.border-t').eq(0).within(() => {
            cy.contains('Guardar').click()
        })

        cy.contains('OK').click()
        cy.wait(2000)
        //Servicios
        cy.get('a').contains('Servicios').click()
        cy.wait(1000)
        cy.contains('+ Nuevo servicio').click()
        cy.wait(2000)
        
        cy.get("#fechadesde").click()
        cy.get('.absolute > :nth-child(3) > :nth-child(3)').click()
        
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
        //TACTOS
        cy.get('a').contains('Tactos').click()
        cy.wait(1000)
        cy.contains('+ Nuevo tacto').click()
        cy.wait(2000)
        cy.get("#fecha").click()
        cy.get('.absolute > :nth-child(3) > :nth-child(3)').click()
        //cy.get('[name="observacion"]').eq(0).type(fertil.tactonuevo.observacion)
        cy.get('#tipotacto').select(0, { force: true })
        cy.get('#estado').select(0, { force: true })
        cy.get('tbody tr').first().find('label').click()
        cy.get('div.border-t.border-cf-border')
            .contains('button', 'Siguiente')
            .click()
        cy.get('.bg-cf-primary')
            .contains('button', 'Crear tacto')
            .click()
        cy.wait(1000)
        cy.get('.swal2-confirm').click()
        cy.wait(2000)
        

    })
})