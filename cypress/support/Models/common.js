/// <reference types="Cypress" />

class common{

    getProfileElement(){
        return cy.get('div[class="analysis-menu__item analysis-menu__item--clickable ng-scope"]')
    }

    getLogoutElement(_elementIdentifier){
        return cy.get('div[class="dropdown-menu__item ng-binding"]').contains('logout')
    }

    logoutofApplicationFromAnalysis(){
        cy.wait(2000)
        this.getProfileElement().click()
        cy.wait(2000)
        this.getLogoutElement().click()
    }

}

export default common