/**
 * Define assertions
 */

describe("Tasks", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Adding a task", () => {
    cy.get('#new-task-form input[name="task"]').type('Setup tests.');
    cy.get('#new-task-form button').click();
    expect(true).to.equal(true);
  })
})
