describe('App Component', () => {
  it('should navigate to the GridView component', () => {
    cy.visit('/');
    cy.contains('GridView').should('be.visible');
  });

  it('should navigate to the EditOrders component', () => {
    cy.visit('/');
    cy.contains('Edit Orders').click();
    cy.url().should('include', '/edit-orders');
    cy.contains('Edit Orders').should('be.visible');
  });

  it('should navigate to the RowCommand1 component', () => {
    cy.visit('/');
    cy.contains('Row Command 1').click();
    cy.url().should('include', '/row-command-1');
    cy.contains('Row Command 1').should('be.visible');
  });

  it('should navigate to the RowCommand2 component', () => {
    cy.visit('/');
    cy.contains('Row Command 2').click();
    cy.url().should('include', '/row-command-2');
    cy.contains('Row Command 2').should('be.visible');
  });

  it('should navigate to the RowDataBound component', () => {
    cy.visit('/');
    cy.contains('Row Data Bound').click();
    cy.url().should('include', '/row-data-bound');
    cy.contains('Row Data Bound').should('be.visible');
  });
});
