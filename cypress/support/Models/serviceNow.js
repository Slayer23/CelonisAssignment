/// <reference types="Cypress" />

class serviceNow{

    getMainHeading(){
        return cy.get('div[class="fullscreen-app__headline ng-binding"]',{timeout:8000})
    }

    getSubHeading(_elementIdentifier){
        return cy.get('div[class="fullscreen-app__section__headline ng-binding"]').contains(_elementIdentifier)
    }

    getEditKPIButton(){
        return cy.get('div[class="btn-group btn-group--align-top btn-group--canvas-ctrl margin-left--xs ng-scope"]')
    }

    //Deviation type Element
    getDeviationsDataElements(_elementIdentifier){
        return cy.get('div[class="tile__title text-center text-overflow ng-binding"]').contains(_elementIdentifier)
    }

    getDeviationsDataElementsValue(_elementIdentifier){
        return this.getDeviationsDataElements(_elementIdentifier).parent().parent().find('div[class="ng-binding"]')
    }

    getDeviationsDataElementsSubtext(_elementIdentifier){
        return this.getDeviationsDataElements(_elementIdentifier).parent().parent().find('div[class="color-gray-dark ng-binding"]')
    }

    //Case Count Elements
    getDeviationsDataElementCaseCount(_elementIdentifier){
        return this.getDeviationsDataElements(_elementIdentifier).parent().parent().parent().
        find('div[title="Case count"]').find('span[class="bold ng-binding"]')
    }

    getDeviationsDataElementCaseCountSubtext(_elementIdentifier){
        return this.getDeviationsDataElements(_elementIdentifier).parent().parent().parent()
        .find('div[title="Case count"]').find('span[class="ng-binding"]')
    }
    
    //Activities Count Elements
    getDeviationsDataElementActivitiesCount(_elementIdentifier){
        return this.getDeviationsDataElements(_elementIdentifier).parent().parent().parent()
        .find('div[title="Activities count"]').find('span[class="bold ng-binding"]')
    }

    getDeviationsDataElementActivitiesCountSubtext(_elementIdentifier){
        return this.getDeviationsDataElements(_elementIdentifier).parent().parent().parent()
        .find('div[title="Activities count"]').find('span[class="ng-binding"]')
    }

    getRightArrowButton(){
        return cy.get('i[class="fa fa-arrow-right color-gray-darker"]')
    }
}

export default serviceNow