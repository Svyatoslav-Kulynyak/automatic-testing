import Login from '../pages/Login';
import HomePage from '../pages/HomePage';

describe('GoIT login tests with Page Object Pattern', () => {
  const loginPage = new Login();
  const homePage = new HomePage();

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    loginPage.visit();
  });

  it('Login and logout with user888@gmail.com', () => {
    loginPage.login('user888@gmail.com', '1234567890');

    homePage.logout();

    loginPage.checkLoginPageOpened();
  });

  it('Login and logout with testowyqa@qa.team', () => {
    loginPage.login('testowyqa@qa.team', 'QA!automation-1');

    homePage.logout();

    loginPage.checkLoginPageOpened();
  });
});