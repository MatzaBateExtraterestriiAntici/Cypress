/// <reference types="cypress" />

/* 
	TEST on the CONVERSIONS area - LONG (use several random values and verify the convertion factors)
*/

const baseUrl = Cypress.env('baseTestSiteUrl')
const pageToUse = '/calculations.html'
const fullUrl = `${baseUrl}${pageToUse}`

context('Actions', () => {
	// Before each test below run the following code
	beforeEach(() => {
	  	cy.visit(fullUrl)
	})

	// Perform the following tests with random values
  	for(let i = 0; i < Math.random() * (300 - 100) + 100; i+= 23.23){
	    // Convert a random value of degrees Celsius to Franheit
	    it('Convert ' + i + ' degrees Celsius to Fahrenheit', () => {
		    cy.get('#celsiusInputBox')
		      	.type(i).should('have.value', i)

		    cy.get('input[value="Convert to Fahrenheit"]')
		    	.click()

		    cy.get('#celsiusToFarenheitResult')
		    	.should('have.value', i * 9 / 5 + 32)
  		}) // END test

	    // Convert a random value of degrees Franheit to Celsius 
	  	it('Convert ' + i + ' degrees Fahrenheit to Celsius', () => {
		    cy.get('#fahrenheitInputBox')
		      	.type(i).should('have.value', i)

		    cy.get('input[value="Convert to Celsius"]')
		    	.click()

		    cy.get('#farenheitToCelsiusResult')
		    	.should('have.value', (5/9) * (i-32))
	  	}) // END test

	    // Convert a random value of degrees Kilograms to Pounds
	  	it('Convert ' + i + ' Kilograms to Pounds', () => {
		    cy.get('#kilogramsToPoundsInputBox')
		      	.type(i).should('have.value', i)

		    cy.get('input[value="Convert to Pounds"]')
		    	.click()

		    cy.get('#kilogramsToPoundsResult')
		    	.should('have.value', i * 2.205)
	  	}) // END test

	    // Convert a random value of degrees Kilograms to Stones
	  	it('Convert ' + i + ' Kilograms to Stones', () => {
		    cy.get('#kilogramsToStonesInputBox')
		      	.type(i).should('have.value', i)

		    cy.get('input[value="Convert to Stones"]')
		    	.click()

		    cy.get('#kilogramsToStonesResult')
		    	.should('have.value', i / 6.35)
	  	}) // END test

	    // Convert a random value of degrees Litters to Gallons
	  	it('Convert ' + i + ' Litters to Gallons', () => {
		    cy.get('#litresToGallonsInputBox')
		      	.type(i).should('have.value', i)

		    cy.get('input[value="Convert to Gallons"]')
		    	.click()

		    cy.get('#litresToGallonsResult')
		    	.should('have.value', i / 3.785)
	  	}) // END test

	    // Convert a random value of degrees Litters to Pints
	  	it('Convert ' + i + ' Litters to Pints', () => {
		    cy.get('#litresToPintsInputBox')
		      	.type(i).should('have.value', i)

		    cy.get('input[value="Convert to Pints"]')
		    	.click()

		    cy.get('#litresToPintsResult')
		    	.should('have.value', i * 2.113)
	  	}) // END test

	    // Convert a random value of degrees Meters to Feet
	  	it('Convert ' + i + ' Meters to Feet', () => {
		    cy.get('#metersToFeetInputBox')
		      	.type(i).should('have.value', i)

		    cy.get('input[value="Convert to Feet"]')
		    	.click()

		    cy.get('#metersToFeetResult')
		    	.should('have.value', i * 3.281)
	  	}) // END test

	    // Convert a random value of degrees Meters to Inches
	  	it('Convert ' + i + ' Meters to Inches', () => {
		    cy.get('#metersToInchesInputBox')
		      	.type(i).should('have.value', i)

		    cy.get('input[value="Convert to Inches"]')
		    	.click()

		    cy.get('#metersToInchesResult')
		    	.should('have.value', i * 39.37)
	  	}) // END test

	} // END FOR loop

}) // END context
