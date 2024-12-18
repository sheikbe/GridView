describe('Customer Management', () => {
  beforeEach(() => {
    cy.visit('/customers');
  });

  it('should display a list of customers', () => {
    cy.get('h1').contains('Customer List');
    cy.get('ul').children().should('have.length.greaterThan', 0);
  });

  it('should navigate to the add customer form', () => {
    cy.contains('Add Customer').click();
    cy.url().should('include', '/customer/new');
    cy.get('h1').contains('Add Customer');
  });

  it('should add a new customer', () => {
    cy.contains('Add Customer').click();
    cy.get('input[name="CompanyName"]').type('Test Company');
    cy.get('input[name="FirstName"]').type('John');
    cy.get('input[name="LastName"]').type('Doe');
    cy.contains('Create').click();
    cy.url().should('include', '/customers');
    cy.get('ul').contains('John Doe - Test Company');
  });

  it('should navigate to the edit customer form', () => {
    cy.get('ul').children().first().click();
    cy.url().should('include', '/customer/');
    cy.get('h1').contains('Edit Customer');
  });

  it('should edit an existing customer', () => {
    cy.get('ul').children().first().click();
    cy.get('input[name="CompanyName"]').clear().type('Updated Company');
    cy.get('input[name="FirstName"]').clear().type('Jane');
    cy.get('input[name="LastName"]').clear().type('Smith');
    cy.contains('Update').click();
    cy.url().should('include', '/customers');
    cy.get('ul').contains('Jane Smith - Updated Company');
  });
});
