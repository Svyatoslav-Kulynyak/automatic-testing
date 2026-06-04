class HomePage {
    checkHomePageOpened() {
      cy.contains('Homepage', { timeout: 15000 })
        .should('be.visible');
    }
  
    openMenu() {
      cy.get('#open-navigation-menu-mobile', { timeout: 15000 })
        .should('be.visible')
        .click({ force: true });
    }
  
    clickLogOut() {
      cy.contains('Log out', { timeout: 15000 })
        .should('be.visible')
        .click({ force: true });
    }
  
    logout() {
      this.checkHomePageOpened();
      this.openMenu();
      this.clickLogOut();
    }
  }
  
  export default HomePage;