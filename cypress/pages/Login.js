class Login {
    visit() {
      cy.visit('https://www.edu.goit.global/account/login');
    }
  
    fillEmail(email) {
      cy.get('#user_email', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(email);
    }
  
    fillPassword(password) {
      cy.get('#user_password', { timeout: 10000 })
        .should('be.visible')
        .clear()
        .type(password);
    }
  
    clickLoginButton() {
      cy.contains('button', 'Log in', { timeout: 10000 })
        .should('be.visible')
        .click({ force: true });
    }
  
    login(email, password) {
      this.fillEmail(email);
      this.fillPassword(password);
      this.clickLoginButton();
    }
  
    checkLoginPageOpened() {

  cy.url({ timeout: 15000 }).should('include', '/account/login');

  cy.get('#user_email', { timeout: 15000 })
    .should('be.visible');

  cy.get('#user_password', { timeout: 15000 })
    .should('be.visible');

}
  }
  
  export default Login;