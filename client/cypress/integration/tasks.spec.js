/**
 * Define assertions
 */

describe("Tasks", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Adding a task", () => {
    cy.get('#new-task-form input[name="task"]').type('Write tests.');
    cy.get('#new-task-form button').click();
    cy.get('ul').children('li').should('have.length', 1);
    cy.get('ul').contains('Write tests.');
    cy.get('#new-task-form input[name="task"]').type('Refactor code.');
    cy.get('#new-task-form button').click();
    cy.get('ul').children('li').should('have.length', 2);
    cy.get('ul').contains('Refactor code.');
  })
})
