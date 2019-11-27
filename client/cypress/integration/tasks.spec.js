/**
 * Define assertions
 */

describe("Tasks", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Heading h1", () => {
    cy.get('h1').contains('Tasks');
  })

  it("Add, complete, and clear tasks", () => {
    // Add tasks
    cy.get('#new-task-form input[name="task"]').type('Write tests.');
    cy.get('#new-task-form button').click();
    cy.get('ul').children('li').should('have.length', 1);
    cy.get('ul').contains('Write tests.');
    cy.get('#new-task-form input[name="task"]').type('Refactor code.');
    cy.get('#new-task-form button').click();
    cy.get('ul').children('li').should('have.length', 2);
    cy.get('ul').contains('Refactor code.');

    // Complete tasks
    cy.get('.li-task').first().click();
    cy.get('.li-completed').should('have.length', 1);

    // Clear completed tasks
    cy.get('button').contains('Clear').click();
    cy.get('ul').children('li').should('have.length', 1);
  })
})
