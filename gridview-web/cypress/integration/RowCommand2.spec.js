describe('RowCommand2 Component', () => {
  it('should display the RowCommand2 component', () => {
    cy.visit('/');
    cy.contains('Row Command 2').click();
    cy.url().should('include', '/row-command-2');
    cy.contains('Row Command 2').should('be.visible');
  });

  it('should fetch and display data in the table', () => {
    cy.visit('/');
    cy.contains('Row Command 2').click();
    cy.get('table').should('be.visible');
    cy.get('tbody tr').should('have.length.greaterThan', 0);
  });

  it('should display the correct data in the table', () => {
    cy.visit('/');
    cy.contains('Row Command 2').click();
    cy.get('tbody tr').first().within(() => {
      cy.get('td').eq(0).should('contain.text', 'Product Name');
      cy.get('td').eq(1).should('contain.text', 'Product Number');
      cy.get('td').eq(2).should('contain.text', 'Price');
    });
  });

  it('should call onIncreasePrice when Increase Price button is clicked', () => {
    cy.visit('/');
    cy.contains('Row Command 2').click();
    cy.get('tbody tr').first().within(() => {
      cy.contains('Increase Price 5%').click();
    });
    cy.get('tbody tr').first().within(() => {
      cy.get('td').eq(2).should('contain.text', '105');
    });
  });
});
