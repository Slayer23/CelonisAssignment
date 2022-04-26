/// <reference types="Cypress" />

import loginPage from '../../../support/Models/loginPage.js'
import homeScreen from '../../../support/Models/homeScreen.js'
import serviceNow from '../../../support/Models/serviceNow.js'
import common from '../../../support/Models/common.js'


describe('Validate Purchase To Pay - PI Social',()=>
{ 
    let LoginPage = new loginPage()
    let HomeScreen = new homeScreen()
    let ServiceNow= new serviceNow()
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
    it('E001 - Login into Celonis',()=>
    {
        cy.visit(testData.url)
        LoginPage.loginToApplication(testData.username,testData.password)

    })


    it('E002 - Service now Ticketing - Open Analyses',()=>
    {
        HomeScreen.getLogoPrimary().click()
        HomeScreen.getMoreButton().should('have.text',' More ').click()   
        HomeScreen.getProcessAnalytics().click()
        
        //Check for SAP ECC - Order to Cash
        HomeScreen.getWorkspaceListElements('--> ServiceNow Ticketing').click()
        HomeScreen.getAnalysesHeaderElements('--> ServiceNow Ticketing').should('have.text','--> ServiceNow Ticketing')
        HomeScreen.getAnalysesLoadElement().click()
    })

    it('E003 - Service now Ticketing - Process AI',()=>
    {
        ServiceNow.getMainHeading().should('contain.text','Process AI')
        ServiceNow.getSubHeading('Most common path').should('contain.text','Most common path')
        ServiceNow.getSubHeading('Most common path\'s KPIs').should('contain.text','Most common path\'s KPIs')
        ServiceNow.getSubHeading('Detected Deviations').should('contain.text','Detected Deviations')

        ServiceNow.getEditKPIButton().should('contain.text','Edit KPI')
    })

    it('E004 - Service now Ticketing - Check Change Priority',()=>
    {
        ServiceNow.getDeviationsDataElements('Change Priority').should('have.text','Change Priority')
        ServiceNow.getDeviationsDataElementsValue('Change Priority').should('have.text','In 35% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('Change Priority').should('have.text','123,534 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('Change Priority').should('have.text','123,534')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('Change Priority').should('have.text','+66,280')

        ServiceNow.getDeviationsDataElementActivitiesCount('Change Priority').should('have.text','124,214')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('Change Priority').should('have.text','-104,802')
    })

    it('E005 - Service now Ticketing - Check State: Open',()=>
    {
        ServiceNow.getDeviationsDataElements('State: Open').should('have.text','State: Open')
        ServiceNow.getDeviationsDataElementsValue('State: Open').should('have.text','In 34% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('State: Open').should('have.text','121,788 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('State: Open').should('have.text','121,788')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('State: Open').should('have.text','+64,534')

        ServiceNow.getDeviationsDataElementActivitiesCount('State: Open').should('have.text','145,584')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('State: Open').should('have.text','-83,432')
    })

    it('E006 - Service now Ticketing - Check Change Impact',()=>
    {
        ServiceNow.getDeviationsDataElements('Change Impact').should('have.text','Change Impact')
        ServiceNow.getDeviationsDataElementsValue('Change Impact').should('have.text','In 32% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('Change Impact').should('have.text','114,102 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('Change Impact').should('have.text','114,102')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('Change Impact').should('have.text','+56,848')

        ServiceNow.getDeviationsDataElementActivitiesCount('Change Impact').should('have.text','114,437')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('Change Impact').should('have.text','-114,579')
    })

    it('E007 - Service now Ticketing - Check State: Active',()=>
    {
        ServiceNow.getDeviationsDataElements('State: Active').should('have.text','State: Active')
        ServiceNow.getDeviationsDataElementsValue('State: Active').should('have.text','In 32% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('State: Active').should('have.text','112,726 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('State: Active').should('have.text','112,726')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('State: Active').should('have.text','+55,472')

        ServiceNow.getDeviationsDataElementActivitiesCount('State: Active').should('have.text','122,410')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('State: Active').should('have.text','-106,606')
    })

    it('E008 - Service now Ticketing - Check Change CI Class',()=>
    {
        ServiceNow.getRightArrowButton().click()
        ServiceNow.getDeviationsDataElements('Change CI Class').should('have.text','Change CI Class')
        ServiceNow.getDeviationsDataElementsValue('Change CI Class').should('have.text','In 28% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('Change CI Class').should('have.text','100,272 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('Change CI Class').should('have.text','100,272')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('Change CI Class').should('have.text','+43,018')

        ServiceNow.getDeviationsDataElementActivitiesCount('Change CI Class').should('have.text','101,526')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('Change CI Class').should('have.text','-127,490')
    })

    it('E009 - Service now Ticketing - Check Change Category',()=>
    {
        ServiceNow.getDeviationsDataElements('Change Category').should('have.text','Change Category')
        ServiceNow.getDeviationsDataElementsValue('Change Category').should('have.text','In 25% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('Change Category').should('have.text','89,928 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('Change Category').should('have.text','89,928')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('Change Category').should('have.text','+32,674')

        ServiceNow.getDeviationsDataElementActivitiesCount('Change Category').should('have.text','172,620')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('Change Category').should('have.text','-56,396')
    })

    it('E010 - Service now Ticketing - Check State: Awaiting User Info',()=>
    {
        ServiceNow.getDeviationsDataElements('State: Awaiting User Info').should('have.text','State: Awaiting User Info')
        ServiceNow.getDeviationsDataElementsValue('State: Awaiting User Info').should('have.text','In 23% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('State: Awaiting User Info').should('have.text','80,892 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('State: Awaiting User Info').should('have.text','80,892')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('State: Awaiting User Info').should('have.text','+23,638')

        ServiceNow.getDeviationsDataElementActivitiesCount('State: Awaiting User Info').should('have.text','93,612')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('State: Awaiting User Info').should('have.text','-135,404')
    })

    it('E011 - Service now Ticketing - Check State: Awaiting Evidence',()=>
    {
        ServiceNow.getDeviationsDataElements('State: Awaiting Evidence').should('have.text','State: Awaiting Evidence')
        ServiceNow.getDeviationsDataElementsValue('State: Awaiting Evidence').should('have.text','In 6% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('State: Awaiting Evidence').should('have.text','20,400 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('State: Awaiting Evidence').should('have.text','20,400')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('State: Awaiting Evidence').should('have.text','-36,854')

        ServiceNow.getDeviationsDataElementActivitiesCount('State: Awaiting Evidence').should('have.text','21,864')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('State: Awaiting Evidence').should('have.text','-207,152')
    })

    it('E012 - Service now Ticketing - Check Change Subcategory',()=>
    {
        ServiceNow.getRightArrowButton().click()
        ServiceNow.getDeviationsDataElements('Change Subcategory').should('have.text','Change Subcategory')
        ServiceNow.getDeviationsDataElementsValue('Change Subcategory').should('have.text','In 4% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('Change Subcategory').should('have.text','15,276 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('Change Subcategory').should('have.text','15,276')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('Change Subcategory').should('have.text','-41,978')

        ServiceNow.getDeviationsDataElementActivitiesCount('Change Subcategory').should('have.text','16,104')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('Change Subcategory').should('have.text','-212,912')
    })

    it('E013 - Service now Ticketing - Check State: Work-In-Progress',()=>
    {
        ServiceNow.getDeviationsDataElements('State: Work-In-Progress').should('have.text','State: Work-In-Progress')
        ServiceNow.getDeviationsDataElementsValue('State: Work-In-Progress').should('have.text','In 2% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('State: Work-In-Progress').should('have.text','6,336 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('State: Work-In-Progress').should('have.text','6,336')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('State: Work-In-Progress').should('have.text','-50,918')

        ServiceNow.getDeviationsDataElementActivitiesCount('State: Work-In-Progress').should('have.text','6,552')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('State: Work-In-Progress').should('have.text','-222,464')
    })

    it('E014 - Service now Ticketing - Check Change Urgency',()=>
    {
        ServiceNow.getDeviationsDataElements('Change Urgency').should('have.text','Change Urgency')
        ServiceNow.getDeviationsDataElementsValue('Change Urgency').should('have.text','In < 1% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('Change Urgency').should('have.text','3,228 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('Change Urgency').should('have.text','3,228')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('Change Urgency').should('have.text','-54,026')

        ServiceNow.getDeviationsDataElementActivitiesCount('Change Urgency').should('have.text','3,360')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('Change Urgency').should('have.text','-225,656')
    })

    it('E015 - Service now Ticketing - Check Change Location',()=>
    {
        ServiceNow.getDeviationsDataElements('Change Location').should('have.text','Change Location')
        ServiceNow.getDeviationsDataElementsValue('Change Location').should('have.text','In < 1% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('Change Location').should('have.text','1,908 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('Change Location').should('have.text','1,908')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('Change Location').should('have.text','-55,346')

        ServiceNow.getDeviationsDataElementActivitiesCount('Change Location').should('have.text','2,064')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('Change Location').should('have.text','-226,952')
    })

    it('E016 - Service now Ticketing - Check State: Awaiting Problem',()=>
    {
        ServiceNow.getRightArrowButton().click()
        ServiceNow.getDeviationsDataElements('State: Awaiting Problem').should('have.text','State: Awaiting Problem')
        ServiceNow.getDeviationsDataElementsValue('State: Awaiting Problem').should('have.text','In < 1% of cases')
        ServiceNow.getDeviationsDataElementsSubtext('State: Awaiting Problem').should('have.text','816 Cases')

        ServiceNow.getDeviationsDataElementCaseCount('State: Awaiting Problem').should('have.text','816')
        ServiceNow.getDeviationsDataElementCaseCountSubtext('State: Awaiting Problem').should('have.text','-56,438')

        ServiceNow.getDeviationsDataElementActivitiesCount('State: Awaiting Problem').should('have.text','816')
        ServiceNow.getDeviationsDataElementActivitiesCountSubtext('State: Awaiting Problem').should('have.text','-228,200')
    })



    it('E0017 - Order To Cash - successful Logout',()=>
    {
        Commmon.logoutofApplicationFromAnalysis()
    })

})

