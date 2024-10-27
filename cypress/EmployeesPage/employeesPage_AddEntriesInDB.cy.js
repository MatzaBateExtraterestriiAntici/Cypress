/// <reference types="cypress" />

import "./employeesPageMethods.js"; // Import the EMPLOYEES related methods
import { randomDate } from "../Configurations/otherFunctions.js"; // Import the FUNCTIONS related file
import { EmployeesPageRepository } from "./employeesPageRepository.js"; // Import the EMPLOYEES related repository 

/* 
	TEST on the EMPLOYEES area - Add several entries in the DB and verify that they are properly introduced 
		at the end of the table
*/

const baseUrl = Cypress.env('baseTestSiteUrl')
const pageToUse = '/employees.php'
const fullUrl = `${baseUrl}${pageToUse}`

describe('Employees area - Add several entries and validate that the table properly shows each entry', () => {
	// Before each test below run the following code
	beforeEach(() => {
	  	cy.visit(fullUrl)
	})

	// Perform the following tests 20 times
  	for(let i = 0; i < 20; i++) {
  		// Create the empty name and date variables
		var name
		var dateStart
		var dateEnd
		  		
		// Array and empty variable used for the departments
		var namesOfDepartments = ['Human Resources', 'Production', 'Management', 'Marketing', 'Sanitation', 'Sales', 'Procurement'];
		var department

		// Create the empty randomNumber and comment variables
		var randomNo
		var loremString


		context('Employees area - add a single entry and verify it', () => {
			
			it('Generate random name to be used later', () => {
				cy.generateRandomNameAndReturnIt();
		  		cy.get('@valueToReturn')
		  			.then(returnedName => {
			        	name = returnedName;
					})
			})

			it('Add the employee to the DB', () => {
		  		dateStart = randomDate(new Date(1987, 0, 1), new Date(1999, 11, 31));
				dateEnd = randomDate(new Date(2000, 0, 1), new Date(2015, 11, 31));
				  		
				// Array for the entries used in the inputs
				department = namesOfDepartments[Math.floor(Math.random() * namesOfDepartments.length)];
				
				// Get a random number to add (or not) comments
				randomNo = Math.floor(Math.random() * 10);
				
				// String value to be used as a comment
				loremString = 'Lorem Ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit';

				// Verify that the table and delete buttons properly exist
		  		cy.verifyTableAndDeleteButtonsExist()

				// Add an employee entry
				cy.addEmployeeEntry(name, department, dateStart, dateEnd, randomNo, loremString)

		  	}) // END test

	  		it('Validate the table properly shows the newly added employee entry', () => {
	  			// Validate that the Employees entry was added properly
				cy.verifyTheEmployeeEntryIsAddedProperly(name, department, dateStart, dateEnd, randomNo, loremString)

	  		}) // END test

  		}) // END context
  	
  	} // END FOR loop

}) // END describe
