// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out



///<reference types = "cypress"/> 

it('selenium_foum_test', ()=>{
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('[type="text"]').type('tomsmith');
    cy.get('[type="password"]').type('SuperSecretPassword!');

    cy.get ('.fa').click();
    cy.get('.flash.success').contains('You logged into a secure area').should('exist')  
})

it('selenium_foum_test', ()=>{
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('[type="text"]').type('notTomsmith');
    cy.get('[type="password"]').type('notSuperSecretPassword!');

    cy.get ('.fa').click();
    cy.get('.flash.error').contains('Your username is invalid').should('exist');  
})

it('selenium_foum_test', ()=>{
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('.icon-2x.icon-signout').click();
    cy.get('.flash.success').contains('You logged out of the secure area!').should('exist')
})