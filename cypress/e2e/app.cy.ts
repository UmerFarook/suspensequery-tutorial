describe('template spec', () => {
  it('passes', () => {
      cy.visit('http://localhost:5173');
      cy.get('[data-testid="title"]').should('contain','Members');
      cy.get('[data-testid^="test"]').should('exist');
  })
})