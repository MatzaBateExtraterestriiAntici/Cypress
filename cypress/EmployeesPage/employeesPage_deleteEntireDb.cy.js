/// <reference types="cypress" />

import "./employeesPageMethods.js"; // Import the EMPLOYEES related methods
import { EmployeesPageRepository } from "./employeesPageRepository.js"; // Import the EMPLOYEES related repository 

/* 
	TEST on the EMPLOYEES area - Delete the entire DB
*/

describe('Employee area - Delete the entire database', () => {
	context('Delete DB and verify table afterwards', () => {	
		// Before each test below run the following code
		beforeEach(() => {
		  	cy.visit('http://daguno.rf.gd/employees.php')
		})

		it('Choose to delete the entire "Employee" table', () => {
			// Verify that the Employee table and delete buttons properly exist
			cy.verifyTableAndDeleteButtonsExist()

			// Click the 'Delete Entire table' button
			cy.get(EmployeesPageRepository.DeleteEmployeeTableButton.Id)
				.click()

			// Wait step only by tester's choice
			cy.wait(1000)

			// Ensure that the confirmation dialog is accepted
			cy.on('window:confirm', () => true);
			
			// Wait step only by tester's choice
			cy.wait(1000)

			// Verify that the Employee table and delete buttons properly exist
			cy.verifyTableAndDeleteButtonsExist()
			
	  	}) // END test

		// 
	 	it('Verify that "Employee" table does not show any more rows', () => {
			// Get the lenght of the table rows and validate that there are no rows except for the table header
			cy.get(EmployeesPageRepository.EmployeeTable.Id)
				.find('tr')
				.should('have.length', 1)
			
	 	}) // END test

	}) // END context

}) // END describe
