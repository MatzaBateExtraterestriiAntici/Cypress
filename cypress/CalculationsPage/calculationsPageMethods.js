/* 
	METHODS related to the CALCULATIONS area 
*/
//import * as constants from

import { CalculationsPageRepository } from "./calculationsPageRepository.js"; // Import the CALCULATIONS related repository


// Custom command to validate that the table and the delete buttons are properly displayed
Cypress.Commands.add('selectCertainCityOptionAndVerifyTheDisplayedTime', function(cityName, expectedHourDifference) {
	// Change the default command timeout value to be 1 second
  	Cypress.config('defaultCommandTimeout', 1000)

	// Get the list of cities title and verify the text displayed
  	cy.get(CalculationsPageRepository.TitleForListOfCities.Id)
  		.click()
  		.invoke('text')
		.then(value => {
			assert.equal(value, CalculationsPageRepository.TitleForListOfCities.Text, 'Are the text values equal?')
		})

	// Get the list of cities control and select the option in the needed city
  	cy.get(CalculationsPageRepository.ListOfCities.Id)
  		.focus()
  		.select(cityName)
 	
  	// Visual aid of the chosen option
  	cy.get(CalculationsPageRepository.ListOfCities.Id + ' option')
  		.contains(cityName)
  		.then($opt => {
		  	  $opt.css('border', '1px solid magenta')
		  	})

  	// Ensure that the Daylight Savings checkbox is ticked
  	cy.get(CalculationsPageRepository.DaylightSavingsCheckbox.Id)
  		.focus()
  		.check({ force: true })
  		.should('be.checked') 

  	// Get the current time and the time in the needed city
  	var dateNow = new Date();
  	var dateHere = dateNow.toLocaleTimeString('ro-RO');
  	var dateInCity = dateNow.setHours(dateNow.getHours() - expectedHourDifference);
  	var formattedDateInCity = new Date(dateInCity).toLocaleTimeString('ro-RO');
  		
  	cy.wait(500)

  	// Validate that the current and in the needed city times are properly displayed
  	cy.get(CalculationsPageRepository.TimeInDifferentCities.Id + ' a')
  		.should('be.visible')

	cy.get(CalculationsPageRepository.TimeInDifferentCities.Id + ' a:nth-child(1)')
		.then(($cici) => { 
			var lastTwoDigits = $cici.text().slice(-2)
			dateHere = dateHere.replace(/^(.*?).{2}(.{0})$/,'$1$2');
			expect($cici.text()).to.contain('Local Time is ' + dateHere)
		})

	cy.get(CalculationsPageRepository.TimeInDifferentCities.Id + ' a:nth-child(2)')
		.then(($cici) => { 
			formattedDateInCity = formattedDateInCity.replace(/^(.*?).{2}(.{0})$/,'$1$2');
		    expect($cici.text()).to.contain('The time in ' + cityName + ' is currently ' + formattedDateInCity)
		})
  	
})

Cypress.Commands.add('removeTheSelectedValueFromTheCitiesList', function() {
	// Remove the border from the option element
	cy.get(CalculationsPageRepository.ListOfCities.Id + ' option')
  		.then($opt => {
		  	  $opt.css('border', 'none')
		  	})
})

Cypress.Commands.add('removeAllValuesOnTheCalculationsPage', function(idsOfInputValues, idsOfConvertedResults) {
	// Simply remove the value from all input boxes and result elements
	cy.get(CalculationsPageRepository.ClearAllCalculationFieldsButton.Id)
		.click()

	// Area to verify the input boxes of the conversions are empty
	idsOfInputValues.forEach(idOfInput =>
	cy.get(idOfInput)
    	.should('have.value', '')
	);

    // Area to verify the results of the conversions are removed
    idsOfConvertedResults.forEach(idOfResult =>
	cy.get(idOfResult)
      	.should('have.value', '')
	);

})
