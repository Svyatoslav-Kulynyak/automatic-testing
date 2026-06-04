describe('API tests', () => {
    it('response code should be 200', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts/1').then(response => {
        expect(response.status).to.eq(200)
      })
    })
  })