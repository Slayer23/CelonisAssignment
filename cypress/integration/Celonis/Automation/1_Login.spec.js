/// <reference types="Cypress" />

import loginPage from '../../../support/Models/loginPage.js'
import homeScreen from '../../../support/Models/homeScreen.js'


describe('Validate Celonis Login Page',()=>
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

    it('A001 - Login to Celonis - invalid username',()=>
    {
        cy.visit(testData.url)
     
        //validates the loging page title
        LoginPage.getPageTitle().should('have.text','Sign in')

        //validate 'Email' label
        LoginPage.getUsernameLabel().should('have.text',' Email ')
        
        //validate 'Password' label
        LoginPage.getPassordLabel().should('have.text',' Password ')
    
        //Enters username
        LoginPage.getUsernameTextbox().type(testData.username+'random')

        //Enters password
        LoginPage.getPasswordTextbox().type(testData.password)
        
        //Click Login Button
        LoginPage.getLoginButton().click()

        //Check Error Message Label
        LoginPage.getErrorMessageLabel().should('have.text',"Email or password are incorrect. ")
    })

    it('A002 - Login to Celonis - invalid password',()=>
    {
        LoginPage.getUsernameTextbox().clear().type(testData.username)
        LoginPage.getPasswordTextbox().clear().type(testData.password+'random')
        LoginPage.getLoginButton().click()

        LoginPage.getErrorMessageLabel().should('have.text',"Email or password are incorrect. ")
    })

    it('A003 - Login to Celonis - blank username',()=>
    {
        LoginPage.getUsernameTextbox().clear()
        LoginPage.getPasswordTextbox().clear().type(testData.password)
        LoginPage.getLoginButton().click()

        LoginPage.getErrorMessageLabel().should('have.text',"Email or password are incorrect. ")
    })
    
    it('A004 - Login to Celonis - blank password',()=>
    {
        LoginPage.getUsernameTextbox().clear().type(testData.username)
        LoginPage.getPasswordTextbox().clear()
        LoginPage.getLoginButton().click()

        LoginPage.getErrorMessageLabel().should('have.text',"Email or password are incorrect. ")
    })

    it('A005 - Login to Celonis - successful login',()=>
    {        
        LoginPage.getUsernameTextbox().clear().type(testData.username)
        LoginPage.getPasswordTextbox().clear().type(testData.password)
        LoginPage.getLoginButton().click()

        //Check for div text by using class as identifier
        HomeScreen.getLogoPrimary().click()
                
    })

    it('A006 - Login to Celonis - successful Logout',()=>
    {
        HomeScreen.logOutOfApplication()
    })

})

