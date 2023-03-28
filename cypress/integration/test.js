/// <reference types="cypress" />

describe('Проверка заголовка у modx', () => {

    it('Тест', () => {
        cy.visit('https://modx.pro/')
        cy.title().should('contain', 'Главная / Русскоязычное сообщество MODX')
    })
})
