import { errorMessages } from "../../src/components/Register";

describe('Register Page', () => {
  describe("Error Mesages", () => {
    it("name input throws error for 2 chars", () => {
      cy.visit('http://localhost:5173/');
      cy.get(`[data-cy="ad-input"]`).type("te");
      cy.contains(errorMessages.ad);
    });
    it("Surname input throws error for 2 chars", () => {
      cy.visit('http://localhost:5173/');
      cy.get(`[data-cy="soyad-input"]`).type("so");
      cy.contains(errorMessages.soyad);
    });
    it("email input throws error for tevfik@wit.", () => {
      cy.visit('http://localhost:5173/');
      cy.get(`[data-cy="email-input"]`).type("tevfik@wit.");
      cy.contains(errorMessages.email);
    });
    it("password input throws error for 1234", () => {
      cy.visit('http://localhost:5173/');
      cy.get(`[data-cy="password-input"]`).type("1234");
      cy.contains(errorMessages.password);
    });
    it("button is disabled for unvalidated inputs", () => {
      cy.visit('http://localhost:5173/');
      cy.get(`[data-cy="password-input"]`).type("1234");
      cy.get(`[data-cy="submit-button"]`).should("be.disabled")
    });
  });
  describe("Form inputs validated", () => {
    it("button enabled for validated inputs.", () => {
      cy.visit('http://localhost:5173/');
      cy.get(`[data-cy="ad-input"]`).type("tevfik");
      cy.get(`[data-cy="soyad-input"]`).type("sosyal");
      cy.get(`[data-cy="email-input"]`).type("tevfik@wit.com.tr");
      cy.get(`[data-cy="password-input"]`).type("1234Aa**");
      cy.get(`[data-cy="submit-button"]`).should("not.be.disabled")
    });
  })


})