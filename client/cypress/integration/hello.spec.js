/**
 * Define assertions
 */

describe("Hello", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("You should add tests!", () => {
    expect(true).to.equal(false);
  })
})
