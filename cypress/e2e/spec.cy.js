describe('url shortener user flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('should display page title, form and the existing shortened URLs', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'urls.json'
    }).as('getUrls')

    cy.get('h1').contains('URL Shortener')
    cy.get('form').within(() => {
      cy.get('[placeholder="Title..."]').should('exist'); 
      cy.get('[placeholder="URL to Shorten..."]').should('exist'); 
      cy.get('button').should('exist');
    })

    cy.get('.url').should('exist');

    cy.get('.url').within(() => {
      cy.get('h2').contains('Awesome photo')
      cy.get('.short-url').contains('http://localhost:3001/useshorturl/1')
      cy.get('.long-url').contains('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    })
  })
})