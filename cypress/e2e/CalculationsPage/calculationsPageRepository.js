/* 
	REPOSITORY related to the CALCULATIONS area 
*/

const TitleForListOfCities = Object.freeze({
	'Id': '#titleForListOfCities',
	'Text': 'Select a city to see what time it is currently                            there'
});

const ListOfCities = Object.freeze({
	'Id': '#listOfCitiesSelectControl',
	'name': 'listOfCities'
});

const DaylightSavingsCheckbox = Object.freeze({
	'Id': '#checkBoxDaylightSavings',
	'name': 'chkDaylightSaving'
});

const TimeInDifferentCitiesDiv = Object.freeze({
	'Id': '#timeInDifferentCities'
});

const ClearAllCalculationFieldsButton = Object.freeze({
	'Id': '#buttonClearAllFieldsOnCalculationsPage'
});

const CelsiusInputBox = Object.freeze({
	'Id': '#celsiusInputBox'
});

const FahrenheitInputBox = Object.freeze({
	'Id': '#fahrenheitInputBox'
});

const KilogramsToPoundsInputBox = Object.freeze({
	'Id': '#kilogramsToPoundsInputBox'
});

const KilogramsToStonesInputBox = Object.freeze({
	'Id': '#kilogramsToStonesInputBox'
});

const LitresToGallonsInputBox = Object.freeze({
	'Id': '#litresToGallonsInputBox'
});

const LitresToPintsInputBox = Object.freeze({
	'Id': '#litresToPintsInputBox'
});

const MetersToFeetInputBox = Object.freeze({
	'Id': '#metersToFeetInputBox'
});

const MetersToInchesInputBox = Object.freeze({
	'Id': '#metersToInchesInputBox'
});

const CelsiusConvertButton = Object.freeze({
	'Value': 'Convert to Celsius'
});

const FahrenheitConvertButton = Object.freeze({
	'Value': 'Convert to Fahrenheit'
});

const KilogramsToPoundsConvertButton = Object.freeze({
	'Value': 'Convert to Pounds'
});

const KilogramsToStonesConvertButton = Object.freeze({
	'Value': 'Convert to Stones'
});

const LitresToGallonsConvertButton = Object.freeze({
	'Value': 'Convert to Gallons'
});

const LitresToPintsConvertButton = Object.freeze({
	'Value': 'Convert to Pints'
});

const MetersToFeetConvertButton = Object.freeze({
	'Value': 'Convert to Feet'
});

const MetersToInchesConvertButton = Object.freeze({
	'Value': 'Convert to Inches'
});

const CelsiusResult = Object.freeze({
	'Id': '#celsiusToFarenheitResult'
});

const FahrenheitResult = Object.freeze({
	'Id': '#farenheitToCelsiusResult'
});

const KilogramsToPoundsResult = Object.freeze({
	'Id': '#kilogramsToPoundsResult'
});

const KilogramsToStonesResult = Object.freeze({
	'Id': '#kilogramsToStonesResult'
});

const LitresToGallonsResult = Object.freeze({
	'Id': '#litresToGallonsResult'
});

const LitresToPintsResult = Object.freeze({
	'Id': '#litresToPintsResult'
});

const MetersToFeetResult = Object.freeze({
	'Id': '#metersToFeetResult'
});

const MetersToInchesResult = Object.freeze({
	'Id': '#metersToInchesResult'
});

// Export the enum with all the needed controls (used afterwards to break up each control and get either path, class, id or other relevant properties ....)
export const CalculationsPageRepository = Object.freeze({
	'TitleForListOfCities': TitleForListOfCities,
	'ListOfCities': ListOfCities,
	
	'DaylightSavingsCheckbox': DaylightSavingsCheckbox,
	
	'TimeInDifferentCities': TimeInDifferentCitiesDiv,
	
	'ClearAllCalculationFieldsButton': ClearAllCalculationFieldsButton,

	'CelsiusInputBox': CelsiusInputBox,
	'FahrenheitInputBox': FahrenheitInputBox,
	'KilogramsToPoundsInputBox': KilogramsToPoundsInputBox,
	'KilogramsToStonesInputBox': KilogramsToStonesInputBox,
	'LitresToGallonsInputBox': LitresToGallonsInputBox,
	'LitresToPintsInputBox': LitresToPintsInputBox,
	'MetersToFeetInputBox': MetersToFeetInputBox,
	'MetersToInchesInputBox': MetersToInchesInputBox,

	'CelsiusConvertButton': CelsiusConvertButton,
	'FahrenheitConvertButton': FahrenheitConvertButton,
	'KilogramsToPoundsConvertButton': KilogramsToPoundsConvertButton,
	'KilogramsToStonesConvertButton': KilogramsToStonesConvertButton,
	'LitresToGallonsConvertButton': LitresToGallonsConvertButton,
	'LitresToPintsConvertButton': LitresToPintsConvertButton,
	'MetersToFeetConvertButton': MetersToFeetConvertButton,
	'MetersToInchesConvertButton': MetersToInchesConvertButton,

	'CelsiusResult': CelsiusResult,
	'FahrenheitResult': FahrenheitResult,
	'KilogramsToPoundsResult': KilogramsToPoundsResult,
	'KilogramsToStonesResult': KilogramsToStonesResult,
	'LitresToGallonsResult': LitresToGallonsResult,
	'LitresToPintsResult': LitresToPintsResult,
	'MetersToFeetResult': MetersToFeetResult,
	'MetersToInchesResult': MetersToInchesResult

});
