/// <reference types="Cypress" />

class loginPage{

    getUsernameTextbox(){
        return cy.get('input[id="ce-input-0"]')
    }

     getPasswordTextbox(){
        return cy.get('input[id="ce-input-1"]')
    }

    getPageTitle(){
        return cy.get('[class="ce-login-layout__title"]')
    }

    getUsernameLabel(){
        return cy.get('label[for="ce-input-0"]')
    }

    getPassordLabel(){
        return cy.get('label[for="ce-input-1"]')
    }

    getLoginButton(){
        return cy.get('[cetestinguid="login-form-submit-button"]')
    }

    getErrorMessageLabel(){
        return cy.get('[class="ce-validation__hints ce-validation__animated"]')
    }

    loginToApplication(_username,_password){
        this.getUsernameTextbox().type(_username)
        this.getPasswordTextbox().type(_password)
        this.getLoginButton().click()
    }
    
}

export default loginPage