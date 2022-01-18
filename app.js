const inquirer = require('inquirer');
const {
    initialQuestions,
    viewQuestions,
    addQuestions,
    insertDepartmentArgs,
    updateQuestions,
    removeQuestions,
    promptInsertrole
} = require('./utils/questions');
const {
    getEmployees,
    getEmployeesByManager,
    getEmployeesByDepartment,
    getRoles,
    getDepartments,
    getBudgetUtilization,
    insertDepartment,
    insertRole,
    insertEmployee,
    updateEmployeeRole,
    updateEmployeeManager,
    deleteDepartment,
    deleteRole,
    deleteEmployee
} = require('./utils/query');

const startApp = () => inquirer.prompt(initialQuestions);
const promptViewQuestions = () => inquirer.prompt(viewQuestions);
// Insert Prompts
const promptAddQuestions = () => inquirer.prompt(addQuestions);
const promptInsertDepartment = () => inquirer.prompt(insertDepartmentArgs);


const promptUpdateQuestions = () => inquirer.prompt(updateQuestions);
const promptRemoveQuestions = () => inquirer.prompt(removeQuestions);

const handleViewResponse = response => {
    switch (response) {
        case 'View all departments':
            getDepartments();
            break;
        case 'View all roles':
            getRoles();
            break;
        case 'View all employees':
            getEmployees()
            break;
        case 'View employees by manager':
            getEmployeesByManager()
            break;
        case 'View employees by department':
            getEmployeesByDepartment()
            break;
        case 'View budget utilization':
            getBudgetUtilization()
            break;
        case 'Back to main menu':
            break;
        case 'Quit':
            console.log('Thank you for using HR Plus!');
            process.exit(0);
    }
    return startApp().then(response => handleResponse(response.startMenu));
}

const handleAddResponse = async response => {
    switch (response) {
        case 'Add a department':
            await promptInsertDepartment()
                .then(response => insertDepartment(response.departmentName))
            break;
        case 'Add a role':
            await promptInsertrole()
                .then(response => insertRole(response.roleName, response.roleSalary, response.departmentId))
            break;
        case 'Add an employee':

            break;
        case 'Back to main menu':
            break;
        case 'Quit':
            console.log('Thank you for using HR Plus!')
            process.exit(0);
    }
    return startApp().then(response => handleResponse(response.startMenu));
}

const handleUpdateResponse = response => {
    switch (response) {
        case 'Update an employee role':

            break;
        case 'Update an employees manager':

            break;
        case 'Back to main menu':
            break;
        case 'Quit':
            console.log('Thank you for using HR Plus!')
            process.exit(0);
    }
    return startApp().then(response => handleResponse(response.startMenu))
}

const handleDeleteResponse = response => {
    switch (response) {
        case 'Remove a department':

            break;
        case 'Remove a role':

            break;
        case 'Remove an employee':

            break;
        case 'Back to main menu':
            break;
        case 'Quit':
            console.log('Thank you for using HR Plus!')
            process.exit(0);
    }
    return startApp().then(response => handleResponse(response.startMenu));
}

const handleResponse = response => {
    switch (response) {
        case 'View Records':
            promptViewQuestions()
                .then(response => handleViewResponse(response.viewChoice));
            break;
        case 'Add Records':
            promptAddQuestions()
                .then(response => handleAddResponse(response.addChoice));
            break;
        case 'Update Records':
            promptUpdateQuestions()
                .then(response => handleUpdateResponse(response.updateChoice));
            break;
        case 'Delete Records':
            promptRemoveQuestions()
                .then(response => handleDeleteResponse(response.removeChoice));
            break;
        case 'Quit':
            console.log('Thank you for using HR Plus!')
            process.exit(0);
    }
}

startApp()
    .then(response => handleResponse(response.startMenu));