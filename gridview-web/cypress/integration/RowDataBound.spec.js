describe('RowDataBound Component', () => {
  it('should display the RowDataBound component', () => {
    cy.visit('/');
    cy.contains('Row Data Bound').click();
    cy.url().should('include', '/row-data-bound');
    cy.contains('Row Data Bound').should('be.visible');
  });

  it('should fetch and display data in the table', () => {
    cy.visit('/');
    cy.contains('Row Data Bound').click();
    cy.get('table').should('be.visible');
    cy.get('tbody tr').should('have.length.greaterThan', 0);
  });

  it('should display the correct data in the table', () => {
    cy.visit('/');
    cy.contains('Row Data Bound').click();
    cy.get('tbody tr').first().within(() => {
      cy.get('td').eq(0).should('contain.text', 'Order ID');
      cy.get('td').eq(1).should('contain.text', 'Customer ID');
      cy.get('td').eq(2).should('contain.text', 'Product ID');
      cy.get('td').eq(3).should('contain.text', 'Quantity');
      cy.get('td').eq(4).should('contain.text', 'Price');
    });
  });
});