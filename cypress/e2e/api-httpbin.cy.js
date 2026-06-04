describe('Postman Echo API tests', () => {
    const baseUrl = 'https://postman-echo.com';
  
    it('Test 1 - GET request should return status 200', () => {
      cy.request('GET', `${baseUrl}/get`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.url).to.include('/get');
      });
    });
  
    it('Test 2 - GET request with query parameters', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/get`,
        qs: {
          name: 'Svyat',
          course: 'QA',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.args.name).to.eq('Svyat');
        expect(response.body.args.course).to.eq('QA');
      });
    });
  
    it('Test 3 - GET request with randomized query parameter', () => {
      const randomId = Math.floor(Math.random() * 10000);
  
      cy.request({
        method: 'GET',
        url: `${baseUrl}/get`,
        qs: {
          userId: randomId,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.args.userId).to.eq(String(randomId));
      });
    });
  
    it('Test 4 - POST request should send body', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/post`,
        body: {
          title: 'Cypress homework',
          completed: true,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json.title).to.eq('Cypress homework');
        expect(response.body.json.completed).to.eq(true);
      });
    });
  
    it('Test 5 - PUT request should update data', () => {
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/put`,
        body: {
          id: 1,
          status: 'updated',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json.id).to.eq(1);
        expect(response.body.json.status).to.eq('updated');
      });
    });
  
    it('Test 6 - PATCH request should partially update data', () => {
      cy.request({
        method: 'PATCH',
        url: `${baseUrl}/patch`,
        body: {
          name: 'Updated name',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json.name).to.eq('Updated name');
      });
    });
  
    it('Test 7 - DELETE request should delete data', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/delete`,
        body: {
          id: 777,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.json.id).to.eq(777);
      });
    });
  
    it('Test 8 - Request should send standard User-Agent header', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/headers`,
        headers: {
          'User-Agent': 'Cypress API Test',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.headers['user-agent']).to.include('Cypress');
      });
    });
  
    it('Test 9 - Request should send custom header', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/headers`,
        headers: {
          'X-Custom-Header': 'GoIT Homework',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.headers['x-custom-header']).to.eq('GoIT Homework');
      });
    });
  
    it('Test 10 - Request duration should be less than 10000 ms', () => {
      cy.request('GET', `${baseUrl}/get`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.lessThan(10000);
      });
    });
  });