describe('url shortener user flow', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      statusCode: 200,
      fixture: 'urls.json'
    });
    cy.visit('http://localhost:3000');
  });
  
  it('should display page title, form and the existing shortened URLs', () => {
    cy.get('h1').should('contain.text', 'URL Shortener');
    cy.get('form').within(() => {
      cy.get('[placeholder="Title..."]').should('exist'); 
      cy.get('[placeholder="URL to Shorten..."]').should('exist'); 
      cy.get('button').should('exist');
    })
    cy.get('.url').should('be.visible')
    cy.get('.url').within(() => {
      cy.get('h2').should('contain.text', 'Awesome photo');
      cy.get('.short-url').should(
        'contain.text',
        'http://localhost:3001/useshorturl/1'
      );
      cy.get('.long-url').should(
        'contain.text',
        'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
      );
    });
  });

  it('form user flow', () => {
    cy.get('[placeholder="Title..."]')
      .type('New Url')
    cy.get('[placeholder="Title..."]').should('have.value', 'New Url')
    cy.get('[placeholder="URL to Shorten..."]')
      .type('https://calendar.google.com/calendar/u/0/r/week')
    cy.get('[placeholder="URL to Shorten..."]').should('have.value', 'https://calendar.google.com/calendar/u/0/r/week')
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      statusCode: 201,
      body: {
        title: 'New Url',
        long_url: 'https://calendar.google.com/calendar/u/0/r/week',
        id: 2,
        short_url: 'http://localhost:3001/useshorturl/2'
      }
    }).as('postUrls')
    cy.get('button').click() 
    cy.get('section > :nth-child(2)').should('be.visible')
    cy.get('section > :nth-child(2)').within(() => {
      cy.get('h2').should('contain.text', 'New Url');
      cy.get('.short-url').should(
        'contain.text',
        'http://localhost:3001/useshorturl/2'
      );
      cy.get('.long-url').should(
        'contain.text',
        'https://calendar.google.com/calendar/u/0/r/week'
      );
    });
  });
});