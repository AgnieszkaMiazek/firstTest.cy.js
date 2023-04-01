// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

import HomePage from "../pages/HomePage";

// -- This is a parent command --
Cypress.Commands.add,
  (username, password) => {
    const homePage = new HomePage();
    const login = new login();

    homePage.getSignInButton().click();
    login.getLoginInput().type(username);
    login.getPasswordInput().type(password);
    login.getSignInButton().click();
  };
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
