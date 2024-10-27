/// <reference types="cypress" />

import "./navigationMethods.js"; // Import the NAVIGATION related methods
import { NavigationRepository } from "./navigationRepository.js"; // Import the NAVIGATION related repository 

/* 
	TEST on the NAVIGATION trough all the pages
*/

const baseUrl = Cypress.env('baseTestSiteUrl')
const pageToUse = '/index.html'
const fullUrl = `${baseUrl}${pageToUse}`

describe('Navigation - Go trough all the pages and verify that the proper page is displayed', () => {
	
	// Before each of the tests below ,run the following code
	beforeEach(() => {
	  	cy.visit(fullUrl) // Simply navigate to the HOME page
	})

	// Array of pages to go trough
	var array = ["Lists", "Modals", "Calculations", "Comments", "Expenses", "Employees", "Contact", "Maps", "About"]

	context('Navigate to a certain page', () => {
		
		// Execute the test for each of the array items	
		array.forEach(function (item, index) {
			
			// Uncomplete url end value to be assigned later
			var urlEnd = 'http://daguno.rf.gd/';
			
			// Simple test to navigate to a certain page and validate that the URL value is the expected one
			it('Go to the "' + item + '" page', () => {
				// Navigate to a certain page and verify the URL
				cy.navigateToACertainPageAndVerifyTheURL(item, index, urlEnd)
			}) // END test
		
		}); // END FOREACH loop

  	}) // END context		
  	
}) // END describe
