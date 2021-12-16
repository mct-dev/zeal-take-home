/// <reference types="cypress" />

context("The Recipe Card", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("Should display chosen recipe", () => {
    cy.get('input[type="checkbox"]').eq(1).click()
    cy.get('input[type="checkbox"]').eq(2).click()

    cy.get("#home").contains("button", "search").click()

    cy.get("li").eq(1).click()

    cy.get('[data-testid="recipe-card"] h5').should('be.visible')
    cy.get('[data-testid="recipe-card"] h6').should('be.visible')
    cy.get('[data-testid="recipe-card"] p').should('be.visible')
  })
})
