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



// insertEmployee('Robert', 'Evanik', 2, 10);
// updateEmployeeRole(1, 101);
// updateEmployeeManager(1, 101);
// insertDepartment('testing 123');
// insertRole('test role', 50000, 1);

// deleteDepartment(7);
// deleteRole(13);
// deleteEmployee(101);

// getEmployees();
// getEmployeesByManager();
// getEmployeesByDepartment();
// getRoles();
// getDepartments();


// getBudgetUtilization();