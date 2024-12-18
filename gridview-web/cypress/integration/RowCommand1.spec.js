describe('RowCommand1 Component', () => {
  it('should display the RowCommand1 component', () => {
    cy.visit('/');
    cy.contains('Row Command 1').click();
    cy.url().should('include', '/row-command-1');
    cy.contains('Row Command 1').should('be.visible');
  });

  it('should fetch and display data in the table', () => {
    cy.visit('/');
    cy.contains('Row Command 1').click();
    cy.get('table').should('be.visible');
    cy.get('tbody tr').should('have.length.greaterThan', 0);
  });

  it('should display the correct data in the table', () => {
    cy.visit('/');
    cy.contains('Row Command 1').click();
    cy.get('tbody tr').first().within(() => {
      cy.get('td').eq(0).should('contain.text', 'Order ID');
      cy.get('td').eq(1).should('contain.text', 'Customer ID');
      cy.get('td').eq(2).should('contain.text', 'Product ID');
      cy.get('td').eq(3).should('contain.text', 'Quantity');
      cy.get('td').eq(4).should('contain.text', 'Price');
    });
  });

  it('should call onEdit when Edit button is clicked', () => {
    cy.visit('/');
    cy.contains('Row Command 1').click();
    cy.get('tbody tr').first().within(() => {
      cy.contains('Edit').click();
    });
    cy.get('input[name="quantity"]').clear().type('5');
    cy.contains('Save').click();
    cy.get('tbody tr').first().within(() => {
      cy.get('td').eq(3).should('contain.text', '5');
    });
  });

  it('should call onDelete when Delete button is clicked', () => {
    cy.visit('/');
    cy.contains('Row Command 1').click();
    cy.get('tbody tr').first().within(() => {
      cy.contains('Delete').click();
    });
    cy.get('tbody tr').should('have.length.lessThan', 1);
  });
});
