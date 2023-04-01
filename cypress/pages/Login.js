class Login {
  getLoginInput() {
    return cy.get("#user_login");
  }

  getPasswordInput() {
    return cy.get("#user_password");
  }

  getSignInButton() {
    return cy.get(".btn-primary");
  }
}
export default Login;
