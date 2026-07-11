import fertil from '../../fixtures/fertil.json'
describe('animales', () => {
    beforeEach("ingresa", () => {
        cy.viewport(1536, 960)
        cy.visit("https://test.crecientefertil.com.ar/");
        cy.get('.mt-5').click()

        cy.get('#username').type(fertil.fertilname)
        cy.get('#password').type(fertil.fertilpas)
        cy.contains('Ingresar').click()
        cy.wait(4000)
        //cy.get('.scrollbar-thin > .overflow-y-auto > :nth-child(8) > .flex')
        cy.get('a').contains('Animales').click()
        cy.wait(1000)
    })
    it("nuevo animal", () => {
        cy.contains('+ Nuevo animal').click()
        cy.wait(2000)
        cy.get('#caravana').type(fertil.animalnuevo.caravana)
        cy.wait(2000)
        cy.get('div.mt-6.flex.space-x-3.justify-end.border-t').eq(0).within(() => {
            cy.contains('Guardar').click()
        })

        cy.contains('OK').click()
        cy.wait(1000)


    })
    it("editar animal", () => {
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(1) // El índice 1 es el segundo botón = Pencil
                .click()
        })
        cy.wait(2000)
        cy.get('#caravana').clear()
        cy.get('#caravana').type(fertil.animaloff.caravananuevo)
        cy.get('div.mt-6.flex.space-x-3.justify-end.border-t').eq(0).within(() => {
            cy.contains('Guardar cambios').click()
        })
        cy.contains('OK').click()
        cy.wait(1000)

    })
    //Cuando tienes varios animales usar
    it.skip("eliminar animal", () => {
        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(2) // El índice 2 es el tercer botón = Eliminar
                .click()
        })
        cy.get(".flex.justify-end").eq(1).within(() => {
            cy.contains('Confirmar').click()
        })
        cy.get('.swal2-confirm').click()
        cy.wait(2000)
        cy.get('.swal2-confirm').click()
    })
    //Cuando tienes varios animales usar
    it.skip("dar baja fallecimiento", () => {
        //Este codigo sirve cuando haces los test continuos si estas probando comentar
        //INICIO GUARDAR
        cy.contains('+ Nuevo animal').click()
        cy.wait(2000)
        cy.get('#caravana').type(fertil.animalnuevo.caravana)
        cy.wait(2000)
        cy.get('div.mt-6.flex.space-x-3.justify-end.border-t').eq(0).within(() => {
            cy.contains('Guardar').click()
        })
        cy.contains('OK').click()
        cy.wait(2000)
        //FIN GUARDAR

        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(0) // El índice 1 es el segundo botón = Pencil
                .click()
        })
        cy.wait(2000)
        cy.contains('Acciones').click()
        cy.get('#fechadesde').click()
        //cy.get('.absolute > :nth-child(3) > :nth-child(3)')
        cy.get('.absolute > :nth-child(3) > :nth-child(3)').click()
        cy.get('#motivo').select(0, { force: true })
        cy.get(".flex.justify-end").eq(0).within(() => {
            cy.contains('Confirmar').click()
        })
        cy.get('.swal2-confirm').click()
        cy.wait(1500)
        cy.get('.swal2-confirm').click()
    })
    //Cuando tienes varios animales usar
    it.skip("dar baja venta", () => {
        //Este codigo sirve cuando haces los test continuos si estas probando comentar
        //INICIO GUARDAR
        cy.contains('+ Nuevo animal').click()
        cy.wait(2000)
        cy.get('#caravana').type(fertil.animalnuevo.caravana)
        cy.wait(2000)
        cy.get('div.mt-6.flex.space-x-3.justify-end.border-t').eq(0).within(() => {
            cy.contains('Guardar').click()
        })
        cy.contains('OK').click()
        cy.wait(2000)
        //FIN GUARDAR

        cy.get('tbody tr').first().within(() => {
            // Busca todos los botones en la última celda (acciones)
            cy.get('td:last-child button')
                .eq(0) // El índice 1 es el segundo botón = Pencil
                .click()
        })
        cy.wait(2000)
        cy.contains('Acciones').click()
        cy.get('#fechadesde').click()
        //cy.get('.absolute > :nth-child(3) > :nth-child(3)')
        cy.get('.absolute > :nth-child(3) > :nth-child(3)').click()
        cy.get('#motivo').select(1, { force: true })
        cy.get(".flex.justify-end").eq(0).within(() => {
            cy.contains('Confirmar').click()
        })
        cy.get('.swal2-confirm').click()
        cy.wait(1500)
        cy.get('.swal2-confirm').click()
    })
    it("nuevo animal", () => {
        cy.wait(5000)
        cy.intercept('*', { forceNetworkError: true }).as('offline')
        cy.contains('+ Nuevo animal').click()
        cy.wait(2000)
        cy.get('#caravana').type(fertil.animalnuevo.caravana)
        cy.wait(2000)
        cy.get('div.mt-6.flex.space-x-3.justify-end.border-t').eq(0).within(() => {
            cy.contains('Guardar').click()
        })

        cy.contains('OK').click()
        cy.wait(1000)


    })
})