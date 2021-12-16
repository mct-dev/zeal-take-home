/// <reference types="cypress" />

context("Search feature", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  describe("Data retrieval", () => {
    it("Should retrieve a list of results", () => {
      cy.get('input[type="checkbox"]').eq(1).click()
      cy.get('input[type="checkbox"]').eq(2).click()

      cy.get("#home").contains("button", "search").click()

      cy.get("li").should("have.length.greaterThan", 1)
    })
  })

  describe("Text filtering", () => {
    it("Should filter results by entered text", () => {
      cy.get('input[type="text"]').type("Glaze")

      cy.get('input[type="checkbox"]').eq(1).click()
      cy.get('input[type="checkbox"]').eq(2).click()

      cy.get("#home").contains("button", "search").click()

      cy.get("li").should("have.length", 3)
    })
  })
})
