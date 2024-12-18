describe('EditOrders Component', () => {
  it('should display the EditOrders component', () => {
    cy.visit('/');
    cy.contains('Edit Orders').click();
    cy.url().should('include', '/edit-orders');
    cy.contains('Edit Orders').should('be.visible');
  });

  it('should fetch and display orders in the table', () => {
    cy.visit('/');
    cy.contains('Edit Orders').click();
    cy.get('table').should('be.visible');
    cy.get('tbody tr').should('have.length.greaterThan', 0);
  });

  it('should display the correct data in the table', () => {
    cy.visit('/');
    cy.contains('Edit Orders').click();
    cy.get('tbody tr').first().within(() => {
      cy.get('td').eq(0).should('contain.text', 'Order ID');
      cy.get('td').eq(1).should('contain.text', 'Customer ID');
      cy.get('td').eq(2).should('contain.text', 'Product ID');
      cy.get('td').eq(3).should('contain.text', 'Quantity');
      cy.get('td').eq(4).should('contain.text', 'Price');
    });
  });

  it('should allow editing an order', () => {
    cy.visit('/');
    cy.contains('Edit Orders').click();
    cy.get('tbody tr').first().within(() => {
      cy.contains('Edit').click();
    });
    cy.get('input[name="quantity"]').clear().type('5');
    cy.contains('Save').click();
    cy.get('tbody tr').first().within(() => {
      cy.get('td').eq(3).should('contain.text', '5');
    });
  });
});
