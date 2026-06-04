describe('My first Cypress test', () => {
  it('Opens example website', () => {
    cy.visit('https://example.com')
    cy.contains('Example Domain')
  })

  it('Checks Learn more link exists', () => {
    cy.visit('https://example.com')
    cy.contains('Learn more').should('be.visible')
  })

  it('Checks Learn more link has correct href', () => {
    cy.visit('https://example.com')
    cy.contains('Learn more')
      .should('have.attr', 'href')
      .and('include', 'iana.org')
  })
})
