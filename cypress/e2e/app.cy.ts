/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    // added a base url to the cypress config
    cy.visit("/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/about");

    // The new page should contain an h1 with "About page"
    cy.get("h1").contains("About Page");
  });

  it("should navigate to the product page", () => {
    // Start from the index page
    // added a base url to the cypress config
    cy.visit("/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="product"]').click();

    // The new url should include "/about"
    cy.url().should("include", "/product");

    // The new page should contain an h1 with "About page"
    cy.get("h1").contains("Product Page");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
