const { getEmployees,
    getRoles,
    getDepartments,
    insertDepartment,
    insertRole,
    insertEmployee,
    updateEmployee } = require('./utils/query');



// insertEmployee('Robert', 'Evanik', 2, 10);
updateEmployee(1, 101);
// insertDepartment('testing 123');
// insertRole('test role', 50000, 1);


getEmployees();
// getRoles();
// getDepartments();