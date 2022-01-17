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
} = require('./query');


const handleResponse = response => {
    switch (response.option) {
        case 'View all departments':
            getDepartments();
            break;
        case 'View all roles':
            getRoles();
            break;
        case 'View all employees':
            getEmployees();
            break;
        case 'View employees by manager':
            getEmployeesByManager();
            break;
        case 'View employees by department':
            getEmployeesByDepartment();
            break;
        case 'View budget utilization':
            getBudgetUtilization();
            break;
        case 'Add a department':
            // Prompt for name
            insertDepartment('testing 123');
            break;
        case 'Add a role':
            // Prpmpt for data
            insertRole('test role', 50000, 1);
            break;
        case 'Add an employee':
            // Prpmpt for data
            insertEmployee('Robert', 'Evanik', 2, 10);
            break;
        case 'Update an employee role':
            // code block
            updateEmployeeRole(1, 101);
            break;
        case 'Update an employees manager':
            // code block
            updateEmployeeManager(1, 101);
            break;
        case 'Remove a department':
            // code block
            deleteDepartment(7);
            break;
        case 'Remove a role':
            // code block
            deleteRole(13);
            break;
        case 'Remove an employee':
            // code block
            deleteEmployee(101);
            break;
        case 'Quit':
            // .then(() => db.end());
            break;
        default:
        // code block
    }
}


module.exports = handleResponse;
