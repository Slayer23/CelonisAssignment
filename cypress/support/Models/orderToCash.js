/// <reference types="Cypress" />

class orderToCash{

    getAnalysisType(){
        return cy.get('div[class="responsive-nav__header ng-binding"]',{timeout:16000})
    }

    getSidebarNavigation(_elementIdentifier){
        return cy.get('div[class="responsive-nav__body"]').contains(_elementIdentifier)
    }

    getMainHeading(){
        return cy.get('div[class="fullscreen-app__headline ng-binding"]')
    }

    getMetricsDataElements(_elementIdentifier){
        return cy.get('div[class="tile__header ng-scope"]').contains(_elementIdentifier)
    }

    getMetricsDataElementsValue(_elementIdentifier){
        return this.getMetricsDataElements(_elementIdentifier).parent().parent().find('span[class="tile__kpi-value "]')
    }

    getMetricsDataElementsSubtext(_elementIdentifier){
        return this.getMetricsDataElements(_elementIdentifier).parent().parent().find('div[class="tile__subscript text-overflow ng-binding"]')
    }
}

export default orderToCash