/* 
	METHODS related to the NAVIGATION area 
*/

import { NavigationRepository } from "./navigationRepository.js"; // Import the NAVIGATION related repository 

// Custom command to validate that the table and the delete buttons are properly displayed
Cypress.Commands.add('navigateToACertainPageAndVerifyTheURL', function(item, index, urlEnd) {
	if (index < 3 || index > 5) // In case the index value is lower than 3 or higher than 5 
	{
		cy.get(NavigationRepository.NavigationMenu.Id) 	// Start from the Main navigation menu element
			.find('a')									// Find all 'a' elements
			.contains(item)								// Get the element that contains the needed name value
			.click()									// Simply click on the element
		urlEnd += item.toLowerCase() + '.html'; 		// Assign the proper value to the URL to be mached
	}
	else
	{
		cy.get(NavigationRepository.DatabasesDropdownContainer.Class)	// Start from the dropdown element on the navigation menu
			.invoke('show') 											// Ensure that the dropdown container is displayed
			.find('a')													// Find all 'a' elements
			.contains(item) 											// Get the element that contains the needed name value
			.click() 													// Simply click on the element
		urlEnd += item.toLowerCase() + '.php'; 							// Assign the proper value to the URL to be mached
	}

	// Verify the proper URL is displayed
	cy.url().should('eq', urlEnd)
})
