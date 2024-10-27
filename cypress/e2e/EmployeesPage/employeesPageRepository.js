/* 
	REPOSITORY related to the EMPLOYEES area 
*/

const RandomNameGeneratorInputBox = Object.freeze({
	'Id': '#randomNameContainer',
	'Class': '.inputBoxForAddingEmployees'
});

const RandomNameGenerateButton = Object.freeze({
	'Id': '#generateRandomNameButton'
})

const RandomNameDeleteButton = Object.freeze({
	'Id': '#deleteRandomGeneratedNameButton'
})

const AddEmployeeForm = Object.freeze({
	'Id': '#addCommentsForm',
	'Action': 'php/phpEmployees/addEmployees.php'
})

const NewEmployeeNameInputBox = Object.freeze({
	'Id': '#inputBoxForAddingEmployeesName',
	'Class': '.inputBoxForAddingEmployees',
	'Placeholder': 'Enter the item name'
})

const NewEmployeeDepartmentDropdown = Object.freeze({
	'Id': '#dropdownForAddingEmployeesDepartment'
})

const NewEmployeeEmployedDateInputBox = Object.freeze({
	'Id': '#inputBoxForAddingEmployeesDateEmployed'
})

const NewEmployeeEndOfEmploymentDateInputBox = Object.freeze({
	'Id': '#inputBoxForAddingEmployeesEndEmploymentDate'
})

const NewEmployeeCommentTextBox = Object.freeze({
	'Id': '#inputBoxForAddingEmployeesComment'
})

const NewEmployeeAddEntryToDBButton = Object.freeze({
	'Id': '#addEntryToEmployeesDBButton'
})

const EmployeeTable = Object.freeze({
	'Id': '#table'
})

const DeleteEmployeeByIdInputBox = Object.freeze({
	'Id': '#inputBoxForDeletingExpensesById'
})

const DeleteEmployeeByIdButton = Object.freeze({
	'Id': '#deleteCommentsByIdButton'
})

const DeleteEmployeeTableButton = Object.freeze({
	'Id': '#deleteEntireTableButton'
})

// Export the enum with all the needed controls (used afterwards to break up each control and get either path, class, id or other relevant properties ....)
export const EmployeesPageRepository = Object.freeze({
	'RandomNameGeneratorInputBox': RandomNameGeneratorInputBox,
	'RandomNameGenerateButton': RandomNameGenerateButton,
	'RandomNameDeleteButton': RandomNameDeleteButton,
	'AddEmployeeForm': AddEmployeeForm,
	'NewEmployeeNameInputBox': NewEmployeeNameInputBox,
	'NewEmployeeDepartmentDropdown': NewEmployeeDepartmentDropdown,
	'NewEmployeeEmployedDateInputBox': NewEmployeeEmployedDateInputBox,
	'NewEmployeeEndOfEmploymentDateInputBox': NewEmployeeEndOfEmploymentDateInputBox,
	'NewEmployeeCommentTextBox': NewEmployeeCommentTextBox,
	'NewEmployeeAddEntryToDBButton': NewEmployeeAddEntryToDBButton,
	'EmployeeTable': EmployeeTable,
	'DeleteEmployeeByIdInputBox': DeleteEmployeeByIdInputBox,
	'DeleteEmployeeByIdButton': DeleteEmployeeByIdButton,
	'DeleteEmployeeTableButton': DeleteEmployeeTableButton
});
