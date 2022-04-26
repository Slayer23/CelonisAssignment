/// <reference types="Cypress" />

class purchaseToPay{

    getAnalysisType(){
        return cy.get('div[class="responsive-nav__header ng-binding"]',{timeout:16000})
    }

    getSidebarNavigation(_elementIdentifier){
        return cy.get('div[class="responsive-nav__body"]').contains(_elementIdentifier)
    }

    getMainHeading(){
        return cy.get('div[class="fullscreen-app__headline ng-binding"]')
    }

    getUsersDataElements(_elementIdentifier){
        return cy.get('div[class="tile__header ng-scope"]').contains(_elementIdentifier)
    }

    getUsersDataElementsValue(_elementIdentifier){
        return this.getUsersDataElements(_elementIdentifier).parent().parent().find('span[class="tile__kpi-value "]')
    }

    getUsersDataElementsSubtext(_elementIdentifier){
        return this.getUsersDataElements(_elementIdentifier).parent().parent().find('div[class="tile__subscript text-overflow ng-binding"]')
    }


}

export default purchaseToPay