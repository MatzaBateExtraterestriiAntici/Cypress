/// <reference types="cypress" />

import "./calculationsPageMethods.js" // Import the CALCULATIONS related methods
import { CalculationsPageRepository } from "./calculationsPageRepository.js" // Import the CALCULATIONS related repository 

/* 
	TEST on the CONVERSIONS area - SHORT
*/

describe('Calculations page - Verify that each of the conversions show the proper value and a sample of the cities displayed convert the time properly', () => {
	// Array for the IDs of the inputs
	var idsOfInputValues = [
		CalculationsPageRepository.CelsiusInputBox.Id,
		CalculationsPageRepository.FahrenheitInputBox.Id,
		CalculationsPageRepository.KilogramsToPoundsInputBox.Id,
		CalculationsPageRepository.KilogramsToStonesInputBox.Id,
		CalculationsPageRepository.LitresToGallonsInputBox.Id,
		CalculationsPageRepository.LitresToPintsInputBox.Id,
		CalculationsPageRepository.MetersToFeetInputBox.Id,
		CalculationsPageRepository.MetersToInchesInputBox.Id,
	]
	// Array for the values given to the inputs
	var valuesForInputs = ['10', '50', '50', '23', '86.22', '100', '1.9876', '3.3333']
			
	// Array for the value of the convert button to use
	var convertButtons = [
		CalculationsPageRepository.CelsiusConvertButton.Value,
		CalculationsPageRepository.FahrenheitConvertButton.Value,
		CalculationsPageRepository.KilogramsToPoundsConvertButton.Value,
		CalculationsPageRepository.KilogramsToStonesConvertButton.Value,
		CalculationsPageRepository.LitresToGallonsConvertButton.Value,
		CalculationsPageRepository.LitresToPintsConvertButton.Value,
		CalculationsPageRepository.MetersToFeetConvertButton.Value,
		CalculationsPageRepository.MetersToInchesConvertButton.Value,
	]

	// Array for the IDs of the conversion results
	var idsOfConvertedResults = [
		CalculationsPageRepository.CelsiusResult.Id,
		CalculationsPageRepository.FahrenheitResult.Id,
		CalculationsPageRepository.KilogramsToPoundsResult.Id,
		CalculationsPageRepository.KilogramsToStonesResult.Id,
		CalculationsPageRepository.LitresToGallonsResult.Id,
		CalculationsPageRepository.LitresToPintsResult.Id,
		CalculationsPageRepository.MetersToFeetResult.Id,
		CalculationsPageRepository.MetersToInchesResult.Id,
	]
	// Array for the conversion result values to be verified
	var valuesOfResults = ['50', '10', '110.25', '3.6220472440944884', '22.779392338177015', '211.3', '6.5213156', '131.23202099999997']

	const baseUrl = Cypress.env('baseTestSiteUrl')
	const pageToUse = '/calculations.html'
    	const fullUrl = `${baseUrl}${pageToUse}`

	context('Test all conversions once and at the same time', () => {
		// Before each test below run the following code
		beforeEach(() => {
		  	cy.visit(fullUrl) // Simply navigate to the required page
		})

		// Verify that the proper image is displayed on the page
	  	it('Verify that the proper image is displayed on the page', () => {
	  		cy.get('.imageOfCat')
			    .should('be.visible')
			    .should('have.attr', 'src', '/images/cat1.jpg')
	  	})  // END test

	  	// Start all conversions at the same time, validate that the proper value is received and then confirm that the empty button performs a valid action
	  	it('Start all conversions and verify the proper value is received, then empty the input boxes', () => {
			// Area to add start conversion values for all input boxes
			idsOfInputValues.forEach(idOfInput =>
				cy.get(idOfInput)
			      	.type(''+valuesForInputs[idsOfInputValues.indexOf(idOfInput)]+'')
			      	.should('have.value', ''+valuesForInputs[idsOfInputValues.indexOf(idOfInput)]+'')
			);

			// Area to click on the conversion buttons for all types
			convertButtons.forEach(btn => cy.get('input[value="' + btn + '"]').click());

		    // Area to verify the given results to each of the conversions
		    idsOfConvertedResults.forEach(idOfResult =>
				cy.get(idOfResult)
			      	.should('have.value', ''+valuesOfResults[idsOfConvertedResults.indexOf(idOfResult)]+'')
			);

		    cy.removeAllValuesOnTheCalculationsPage(idsOfInputValues, idsOfConvertedResults)

	  	})  // END test

	}) // END context

	context('Test a sample of the cities and times', () => { 
		// Before each test below run the following code
		beforeEach(() => {
		  	cy.visit(fullUrl) // Simply navigate to the required page
		})
		
		var citiesAndHours = { 
			'Beijing': 8, 
			'Tokyo': 7, 
			'Bogata (Mures)': -10, 
			'Bogota (Columbia)': -3, 
			'Honolulu': 3, 
			'Winnipeg': -2, 
			'Port Vila (Vanuatu)': 5, 
			'Tarawa (Kiribati)': 2, 
			'Rio de Janeiro': -5 ,
			'Sydney': 6,
			'Paris': -9
		};

		for(let key in citiesAndHours) {
			it ('Select the city ' + key + ' and validate the current hour here and displayed there', () => {
				cy.selectCertainCityOptionAndVerifyTheDisplayedTime(key, citiesAndHours[key])
			}) // END test
		} // END for loop

		// After each test below run the following code
		afterEach(() => {
		  	cy.removeAllValuesOnTheCalculationsPage(idsOfInputValues, idsOfConvertedResults)
		    cy.removeTheSelectedValueFromTheCitiesList()
		})

	}) // END context

}) // END describe
