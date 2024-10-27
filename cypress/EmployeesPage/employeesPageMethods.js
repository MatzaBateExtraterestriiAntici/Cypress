/* 
	METHODS related to the EMPLOYEES area 
*/

import { EmployeesPageRepository } from "./employeesPageRepository.js"; // Import the EMPLOYEES related repository 

// Custom command to validate that the table and the delete buttons are properly displayed
Cypress.Commands.add('verifyTableAndDeleteButtonsExist', function() {
	// Validate that the table, 'Delete Entry by Id' input and button, and the 'Delete Table' button are all visible
	cy.get(EmployeesPageRepository.EmployeeTable.Id)
		.should('be.visible')
	cy.get(EmployeesPageRepository.DeleteEmployeeByIdInputBox.Id)
		.should('be.visible')
	cy.get(EmployeesPageRepository.DeleteEmployeeByIdButton.Id)
		.should('be.visible')
	cy.get(EmployeesPageRepository.DeleteEmployeeTableButton.Id)
		.should('be.visible')
})

// Custom command to generate a random name and return it
Cypress.Commands.add('generateRandomNameAndReturnIt', function() {
	cy.get(EmployeesPageRepository.RandomNameGeneratorInputBox.Id)
		.should('be.visible')
	cy.get(EmployeesPageRepository.RandomNameGenerateButton.Id)
		.should('be.visible')
		.click()
	cy.get(EmployeesPageRepository.RandomNameGeneratorInputBox.Id)
		.invoke('text')
		.then(value => {
			cy.wrap(value).as('valueToReturn')
		})

	cy.get(EmployeesPageRepository.RandomNameDeleteButton.Id)
		.should('be.visible')
		.click()
})

// Custom command to 'ADD EMPLOYEE ENTRY'
Cypress.Commands.add('addEmployeeEntry', function(name, department, dateStart, dateEnd, randomNo, loremString) {
	cy.get(EmployeesPageRepository.AddEmployeeForm.Id)
		.should('be.visible')
		.should('have.attr', 'action', EmployeesPageRepository.AddEmployeeForm.Action)

	cy.get(EmployeesPageRepository.NewEmployeeNameInputBox.Id)
		.type(name).should('have.value', name)

	// Set and validate that the Cost input has received the proper value
	cy.get(EmployeesPageRepository.NewEmployeeDepartmentDropdown.Id)
		.focus()
  		.select(department)

	// Set and validate that the Who made the purchase input has received the proper value
	cy.get(EmployeesPageRepository.NewEmployeeEmployedDateInputBox.Id)
		.type(dateStart).should('have.value', dateStart)

	// Set and validate that the Who made the purchase input has received the proper value
	cy.get(EmployeesPageRepository.NewEmployeeEndOfEmploymentDateInputBox.Id)
		.type(dateEnd).should('have.value', dateEnd)

	// Only execute this code if the number is strictly greater than 5
	if (randomNo > 5) {
		// Set and validate that the Comment input has received the proper value
		cy.get(EmployeesPageRepository.NewEmployeeCommentTextBox.Id)
			.type(loremString).should('have.value', loremString) 
	}

	// Click the 'Add Employee' button
	cy.get(EmployeesPageRepository.NewEmployeeAddEntryToDBButton.Id)
		.click()

	cy.log('Properly added the employee with the data: ' + name + ', ' + department + ', ' + dateStart + ', ' + dateEnd + ', ' + loremString)
})

// Custom command to 'VERIFY IF THE NEWLY ADDED EMPLOYEE ENTRY IS DISPLAYED'
Cypress.Commands.add('verifyTheEmployeeEntryIsAddedProperly', function(name, department, dateStart, dateEnd, randomNo, loremString) {
	// Verify that the Employees table and delete buttons properly exist
	cy.verifyTableAndDeleteButtonsExist()

	// Get the last page navigation element on the table and click it
	cy.get('#nav a')
		.last()
		.should('be.visible')
		.click()

	// Wait step only by tester's choice
	cy.wait(1000)

	// Get the last table row available
	const lastRow = cy.get(EmployeesPageRepository.EmployeeTable.Id + ' tbody tr').last()
	// Validate that the last table row is visible
	lastRow.should('be.visible')

	// Validate that the Employee Name cell has received the proper value
	lastRow.children('td').eq(1)
		.should('have.text', name)

	// Validate that the Department cell has received the proper value
	lastRow.parent().children('td').eq(2)
		.should('have.text', department)

	// Validate that the Date START cell has received the proper value
	lastRow.parent().children('td').eq(3)
			.should('have.text', dateStart)

	// Validate that the Who Date END cell has received the proper value
	lastRow.parent().children('td').eq(4)
			.should('have.text', dateEnd)

	// Only execute this code if the number is strictly greater than 5
	if (randomNo > 5) {
		// Validate that the Comment cell has received the proper value
		lastRow.parent().children('td').eq(5)
			.should('have.text', loremString)
	} // ELSE execute this code
	else {
		// Validate that the Comment cell has received the proper value
		lastRow.parent().children('td').eq(5)
			.should('have.text', '')
	}
})
