/// <reference types="Cypress" />

import loginPage from '../../../support/Models/loginPage.js'
import homeScreen from '../../../support/Models/homeScreen.js'


describe('Validate Celonis Home Page',()=>
{ 
    let LoginPage = new loginPage()
    let HomeScreen = new homeScreen()
    let testData

    beforeEach(()=>
    {
        //Maintain the following cookies for this TestCase
        Cypress.Cookies.preserveOnce('two-factor-client-id', 'celonis-user-token','celonis-user-token')
        
        cy.fixture('testDataCelonis').then((data)=>
        {
            testData=data
        })

    })  
    it('B001 - Login into Celonis',()=>
    {
        cy.visit(testData.url)
        LoginPage.loginToApplication(testData.username,testData.password)

    })


    it('B002 - Home Page - Check basic UI elements on More button',()=>
    {
        HomeScreen.getLogoPrimary().click()
        HomeScreen.getMoreButton().should('have.text',' More ').click()   
        HomeScreen.getProcessAnalytics().click()
        HomeScreen.getWorkspaceElement().should('have.text','Workspaces')
        HomeScreen.getAnaysesElement().should('have.text',' Analyses ')

    })

    it('B003 - Home Page - Check for all available Workspaces',()=>
    {
        HomeScreen.getWorkspaceListElements('All Workspaces').should('have.text','All Workspaces')
        HomeScreen.getWorkspaceListElements('--> Pizza Demo').should('have.text','--> Pizza Demo')
        HomeScreen.getWorkspaceListElements('--> SAP ECC - Order to Cash').should('have.have.text','--> SAP ECC - Order to Cash')
        HomeScreen.getWorkspaceListElements('--> SAP ECC - Purchase to Pay ').should('have.have.text','--> SAP ECC - Purchase to Pay ')
        HomeScreen.getWorkspaceListElements('--> ServiceNow Ticketing').should('have.have.text','--> ServiceNow Ticketing')
        HomeScreen.getWorkspaceListElements('[TEMP] SAP ECC - Purchase to Pay').should('have.have.text','[TEMP] SAP ECC - Purchase to Pay')

    })

    it('B004 - Home Page -  Check Analyses section for Workspace selection',()=>
    {
        //Check for Pizza Demo
        HomeScreen.getWorkspaceListElements('--> Pizza Demo').click()
        HomeScreen.getAnalysesHeaderElements('--> Pizza Demo').should('have.text','--> Pizza Demo')

        //Check for SAP ECC - Order to Cash
        HomeScreen.getWorkspaceListElements('--> SAP ECC - Order to Cash').click()
        HomeScreen.getAnalysesHeaderElements('--> SAP ECC - Order to Cash').should('have.text','--> SAP ECC - Order to Cash')

        //Check for SAP ECC - Purchase to Pay
        HomeScreen.getWorkspaceListElements('--> SAP ECC - Purchase to Pay ').click()
        HomeScreen.getAnalysesHeaderElements('--> SAP ECC - Purchase to Pay ').should('have.text','--> SAP ECC - Purchase to Pay ')

        //Check for erviceNow Ticketing
        HomeScreen.getWorkspaceListElements('--> ServiceNow Ticketing').click()
        HomeScreen.getAnalysesHeaderElements('--> ServiceNow Ticketing').should('have.text','--> ServiceNow Ticketing')
        
        //Check for [TEMP] SAP ECC - Purchase to Pay
        HomeScreen.getWorkspaceListElements('[TEMP] SAP ECC - Purchase to Pay').click()
        HomeScreen.getAnalysesHeaderElements('[TEMP] SAP ECC - Purchase to Pay').should('have.text','[TEMP] SAP ECC - Purchase to Pay')
        
        //Check for All Workspace
        HomeScreen.getWorkspaceListElements('All Workspaces').click()
        HomeScreen.getAnalysesHeaderElements('--> Pizza Demo').should('have.text','--> Pizza Demo')
        HomeScreen.getAnalysesHeaderElements('--> SAP ECC - Order to Cash').should('have.text','--> SAP ECC - Order to Cash')
        HomeScreen.getAnalysesHeaderElements('--> SAP ECC - Purchase to Pay ').should('have.text','--> SAP ECC - Purchase to Pay ')
        HomeScreen.getAnalysesHeaderElements('--> ServiceNow Ticketing').should('have.text','--> ServiceNow Ticketing')
        HomeScreen.getAnalysesHeaderElements('[TEMP] SAP ECC - Purchase to Pay').should('have.text','[TEMP] SAP ECC - Purchase to Pay')
    })

    it('B005 -  Home Page - successful Logout',()=>
    {
        HomeScreen.logOutOfApplication()
    })

})

