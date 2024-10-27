/* 
	REPOSITORY related to the NAVIGATION area
*/

const NavigationMenu = Object.freeze({
	'Id': '#navigationMenu',
	'Class': '.scrollmenu'
});

const DatabasesDropdown = Object.freeze({
	'Id': '#navigationMenuDatabasesDropdown',
	'Class': '.dropdown'
});

const DatabasesDropdownContainer = Object.freeze({
	'Class': '.dropdown-content'
});

// Export the enum with all the needed controls (used afterwards to break up each control and get either path, class, id or other relevant properties ....)
export const NavigationRepository = Object.freeze({
	'NavigationMenu': NavigationMenu,
	'DatabasesDropdown': DatabasesDropdown,
	'DatabasesDropdownContainer': DatabasesDropdownContainer
});
