/// <reference types="Cypress" />

class homeScreen{

    getLogoPrimary(){
        return cy.get('[cetestinguid="ceHeaderLogo-link"]')
    }

    getLogoSecondary(){
        return cy.get('div[class="icon icon-celonis-logo"]')
    }

    getMoreButton(){
        return cy.get('div[class="ce-app-switcher__more ce-app-switcher__list-item"]')
    }

    getProcessAnalytics(){
        return cy.get('div[class="ce-menu-content"]').contains(' Process Analytics ')
    }

    getWorkspaceElement(){
        return cy.get('div[class="ce-header ce-header--middle no-padding"]').contains('Workspaces')
    }

    getAnaysesElement(){
        return cy.get('div[class="ce-header ce-header--middle no-padding"]').contains(' Analyses ')
    }

    getWorkspaceListElements(_elementIdentifier){
        return cy.get('div[class="ce-list__inner-wrapper"]').contains(_elementIdentifier)
    }

    getAnalysesHeaderElements(_elementIdentifier){
        return cy.get('div[class="ce-section__left-header"]').contains(_elementIdentifier)

    }

    getUserButton(){
        return cy.get('div[title="Twinkle Sirola"]')
    }

    getLogOutButton(){
        return cy.get('button[data-testing-uid="userMenu-logout-button"]')
    }

    getAnalysesLoadElement(){
        return cy.get('div[class="ce-tile__wrapper"]')
    }

    logOutOfApplication(){
        cy.wait(2000)
        this.getUserButton().click()
        cy.wait(2000)
        this.getLogOutButton().click()
    }

}

export default homeScreen