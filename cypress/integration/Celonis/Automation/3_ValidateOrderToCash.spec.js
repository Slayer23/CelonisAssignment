/// <reference types="Cypress" />

import loginPage from '../../../support/Models/loginPage.js'
import homeScreen from '../../../support/Models/homeScreen.js'
import orderToCash from '../../../support/Models/orderToCash.js'
import common from '../../../support/Models/common.js'


describe('Validate Order To Cash - Process Overview',()=>
{ 
    let LoginPage = new loginPage()
    let HomeScreen = new homeScreen()
    let OrderToCash = new orderToCash()
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
    it('C001 - Login into Celonis',()=>
    {
        cy.visit(testData.url)
        LoginPage.loginToApplication(testData.username,testData.password)
    })


    it('C002 - Order To Cash - Open Analyses',()=>
    {
        HomeScreen.getLogoPrimary().click()
        HomeScreen.getMoreButton().should('have.text',' More ').click()   
        HomeScreen.getProcessAnalytics().click()
        
        //Check for SAP ECC - Order to Cash
        HomeScreen.getWorkspaceListElements('--> SAP ECC - Order to Cash').click()
        HomeScreen.getAnalysesHeaderElements('--> SAP ECC - Order to Cash').should('have.text','--> SAP ECC - Order to Cash')
        HomeScreen.getAnalysesLoadElement().click()
    })

    it('C003 - Order To Cash - Validate Process Overview',()=>
    {
        OrderToCash.getAnalysisType().should('have.text','Process overview')
        OrderToCash.getMainHeading().should('have.text','Process overview')
        OrderToCash.getSidebarNavigation('Overview').should('have.text','Overview')
        OrderToCash.getSidebarNavigation('Throughput times').should('have.text','Throughput times')
        OrderToCash.getSidebarNavigation('Activities').should('have.text','Activities')

    })

    it('C004 - Order To Cash - Validate Metrics Data',()=>
    {
        //Validate Cases per day 
        OrderToCash.getMetricsDataElements('Cases per day').should('have.text','Cases per day')
        OrderToCash.getMetricsDataElementsValue('Cases per day').should('have.text','1,913')
        OrderToCash.getMetricsDataElementsSubtext('Cases per day').should('have.text','Total number of cases per day')  
            
        //Validate Events per day 
        OrderToCash.getMetricsDataElements('Events per day').should('have.text','Events per day')
        OrderToCash.getMetricsDataElementsValue('Events per day').should('have.text','12,097')
        OrderToCash.getMetricsDataElementsSubtext('Events per day').should('have.text','Total number of events per day')    

        //Validate Events per day 
        OrderToCash.getMetricsDataElements('Throughput time').should('have.text','Throughput time')
        OrderToCash.getMetricsDataElementsValue('Throughput time').should('have.text','22')
        OrderToCash.getMetricsDataElementsSubtext('Throughput time').should('have.text','Average case duration from process start to process end without extreme outliers') 
    })

    it('C005 - Order To Cash - successful Logout',()=>
    {
        Commmon.logoutofApplicationFromAnalysis()
    })

})

