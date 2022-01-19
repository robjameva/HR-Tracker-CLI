const startApp = require('./utils/questions/initialQuestions');
const promptViewQuestions = require('./utils/questions/viewQuestions');
const { promptAddQuestions, promptInsertDepartment, promptInsertRole, promptInsertEmployee } = require('./utils/questions/addQuestions');
const { promptUpdateQuestions, promptUpdateRole, promptUpdateManager } = require('./utils/questions/updateQuestions');
const { promptRemoveQuestions, promptDeleteDepartment, promptDeleteRole, promptDeleteEmployee } = require('./utils/questions/deleteQuestions');
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
} = require('./utils/queries/query');


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
            await promptInsertRole()
                .then(response => insertRole(response.roleName, response.roleSalary, response.departmentId))
            break;
        case 'Add an employee':
            await promptInsertEmployee()
                .then(response => insertEmployee(response.firstName, response.lastName, response.roleId, response.managerId))
            break;
        case 'Back to main menu':
            break;
        case 'Quit':
            console.log('Thank you for using HR Plus!')
            process.exit(0);
    }
    return startApp().then(response => handleResponse(response.startMenu));
}

const handleUpdateResponse = async response => {
    switch (response) {
        case 'Update an employee role':
            await promptUpdateRole()
                .then(response => updateEmployeeRole(response.roleId, response.employeeId))
            break;
        case 'Update an employees manager':
            await promptUpdateManager()
                .then(response => updateEmployeeManager(response.managerId, response.employeeId))
            break;
        case 'Back to main menu':
            break;
        case 'Quit':
            console.log('Thank you for using HR Plus!')
            process.exit(0);
    }
    return startApp().then(response => handleResponse(response.startMenu))
}

const handleDeleteResponse = async response => {
    switch (response) {
        case 'Remove a department':
            await promptDeleteDepartment()
                .then(response => deleteDepartment(response.departmentId))
            break;
        case 'Remove a role':
            await promptDeleteRole()
                .then(response => deleteRole(response.roleId))
            break;
        case 'Remove an employee':
            await promptDeleteEmployee()
                .then(response => deleteEmployee(response.employeeId))
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