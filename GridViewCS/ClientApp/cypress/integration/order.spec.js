describe('Order Management', () => {
  beforeEach(() => {
    cy.visit('/orders');
  });

  it('should display a list of orders', () => {
    cy.get('h1').contains('Order List');
    cy.get('ul').children().should('have.length.greaterThan', 0);
  });

  it('should navigate to the add order page', () => {
    cy.contains('Add Order').click();
    cy.url().should('include', '/orders/add');
    cy.get('h1').contains('Add Order');
  });

  it('should add a new order', () => {
    cy.contains('Add Order').click();
    cy.get('input[name="CustomerID"]').type('1');
    cy.get('input[name="OrderDate"]').type('2023-01-01');
    cy.get('input[name="TotalAmount"]').type('100.00');
    cy.contains('Create').click();
    cy.url().should('include', '/orders');
    cy.get('ul').children().should('have.length.greaterThan', 0);
  });

  it('should navigate to the edit order page', () => {
    cy.get('ul').children().first().contains('Edit').click();
    cy.url().should('include', '/orders/edit');
    cy.get('h1').contains('Edit Order');
  });

  it('should update an existing order', () => {
    cy.get('ul').children().first().contains('Edit').click();
    cy.get('input[name="TotalAmount"]').clear().type('200.00');
    cy.contains('Update').click();
    cy.url().should('include', '/orders');
    cy.get('ul').children().first().contains('200.00');
  });
});
