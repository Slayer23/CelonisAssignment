/// <reference types="Cypress" />

import loginPage from '../../../support/Models/loginPage.js'
import homeScreen from '../../../support/Models/homeScreen.js'
import purchaseToPay from '../../../support/Models/purchaseToPay.js'
import common from '../../../support/Models/common.js'


describe('Validate Purchase To Pay - PI Social',()=>
{ 
    let LoginPage = new loginPage()
    let HomeScreen = new homeScreen()
    let PurchaseToPay = new purchaseToPay()
    let Commmon =new common()
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
    
    it('D001 - Login into Celonis',()=>
    {
        cy.visit(testData.url)
        LoginPage.loginToApplication(testData.username,testData.password)

    })


    it('D002 - Purchase To Pay - Open Analyses',()=>
    {
        HomeScreen.getLogoPrimary().click()
        HomeScreen.getMoreButton().should('have.text',' More ').click()   
        HomeScreen.getProcessAnalytics().click()
        
        //Check for SAP ECC - Order to Cash
        HomeScreen.getWorkspaceListElements('--> SAP ECC - Purchase to Pay ').click()
        HomeScreen.getAnalysesHeaderElements('--> SAP ECC - Purchase to Pay ').should('have.text','--> SAP ECC - Purchase to Pay ')
        HomeScreen.getAnalysesLoadElement().click()   
    })

    it('D003 - Purchase To Pay - Validate PI Social',()=>
    {
        PurchaseToPay.getAnalysisType().should('have.text','PI Social')
        PurchaseToPay.getMainHeading().should('have.text','Overview')
        PurchaseToPay.getSidebarNavigation('Overview').should('have.text','Overview')
        PurchaseToPay.getSidebarNavigation('Users').should('have.text','Users')
        PurchaseToPay.getSidebarNavigation('Activities').should('have.text','Activities')

    })

    it('C004 - Order To Cash - Validate Users Data',()=>
    {
        //Validate Active users
        PurchaseToPay.getUsersDataElements('Active users').should('have.text','Active users')
        PurchaseToPay.getUsersDataElementsValue('Active users').should('have.text','18')
        PurchaseToPay.getUsersDataElementsSubtext('Active users').should('have.text','Average number of users who have executed an activity within a day')  
            
        //Validate Events per users
        PurchaseToPay.getUsersDataElements('Events per user').should('have.text','Events per user')
        PurchaseToPay.getUsersDataElementsValue('Events per user').should('have.text','1,007')
        PurchaseToPay.getUsersDataElementsSubtext('Events per user').should('have.text','Average daily number of events per user.')    

        //Validate Cases per users
        PurchaseToPay.getUsersDataElements('Cases per users').should('have.text','Cases per users')
        PurchaseToPay.getUsersDataElementsValue('Cases per users').should('have.text','55,804')
        PurchaseToPay.getUsersDataElementsSubtext('Cases per users').should('have.text','Average number of cases per user')

        //Validate Users per case
        PurchaseToPay.getUsersDataElements('Users per case').should('have.text','Users per case')
        PurchaseToPay.getUsersDataElementsValue('Users per case').should('have.text','6')
        PurchaseToPay.getUsersDataElementsSubtext('Users per case').should('have.text','Average number of users per case') 
    })

    it('D005 - Order To Cash - successful Logout',()=>
    {
        Commmon.logoutofApplicationFromAnalysis()
    })

})

