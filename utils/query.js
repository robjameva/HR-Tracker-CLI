const db = require('../db/connection')
const cTable = require('console.table');

const getDepartments = () => {
    const sql = `SELECT id, name AS department
                 FROM departments`;

    db.query(sql, (err, rows) => {
        if (err) console.log({ error: err.message });
        console.log('\n \n ')
        console.table(rows);
    });
}

const getRoles = () => {
    const sql = `SELECT roles.id, title, CONCAT('$', FORMAT(salary, 0)) AS 'salary', departments.name AS department
                 FROM roles
                 LEFT JOIN departments ON roles.department_id = departments.id`;

    db.query(sql, (err, rows) => {
        if (err) console.log({ error: err.message });
        console.log('\n \n ')
        console.table(rows);
    });
}

const getEmployees = () => {
    const sql = `SELECT e.id, e.first_name, e.last_name, roles.title, departments.name AS department, CONCAT('$', FORMAT(roles.salary, 0)) AS 'salary', m.first_name AS Manager
                 FROM employees e
                 LEFT JOIN employees m ON e.manager_id = m.id
                 LEFT JOIN roles ON e.role_id = roles.id
                 LEFT JOIN departments ON roles.department_id = departments.id`;

    db.query(sql, (err, rows) => {
        if (err) console.log({ error: err.message });
        console.log('\n \n ')
        console.table(rows);
    });
}

const getEmployeesByManager = () => {
    const sql = `SELECT m.first_name AS Manager, e.id, e.first_name, e.last_name, roles.title, departments.name AS department, CONCAT('$', FORMAT(roles.salary, 0)) AS 'salary'
                 FROM employees e
                 LEFT JOIN employees m ON e.manager_id = m.id
                 LEFT JOIN roles ON e.role_id = roles.id
                 LEFT JOIN departments ON roles.department_id = departments.id
                 ORDER BY m.first_name`;

    db.query(sql, (err, rows) => {
        if (err) console.log({ error: err.message });
        console.log('\n \n ')
        console.table(rows);
    });
}

const getEmployeesByDepartment = () => {
    const sql = `SELECT departments.name AS department, e.id, e.first_name, e.last_name, roles.title, CONCAT('$', FORMAT(roles.salary, 0)) AS 'salary', m.first_name AS Manager
                 FROM employees e
                 LEFT JOIN employees m ON e.manager_id = m.id
                 LEFT JOIN roles ON e.role_id = roles.id
                 LEFT JOIN departments ON roles.department_id = departments.id
                 ORDER BY departments.name`;

    db.query(sql, (err, rows) => {
        if (err) console.log({ error: err.message });
        console.log('\n \n ')
        console.table(rows);
    });
}

const getBudgetUtilization = () => {
    const sql = `SELECT departments.name AS department, CONCAT('$', FORMAT(SUM(roles.salary), 0)) AS 'budget used'
                 FROM employees 
                 LEFT JOIN roles ON role_id = roles.id
                 LEFT JOIN departments ON roles.department_id = departments.id
                 GROUP BY departments.name`;

    db.query(sql, (err, rows) => {
        if (err) console.log({ error: err.message });
        console.log('\n \n ')
        console.table(rows);
    });
}

const insertDepartment = departmentName => {
    const sql = `INSERT INTO departments (name)
    VALUES (?)`;

    db.query(sql, departmentName, (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log('\n \n ')
        console.log(`${departmentName} was successfully added to the tracker!`)
    });
}

const insertRole = (roleName, salary, department) => {
    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?, ?, ?)`;

    db.query(sql, [roleName, salary, department], (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log('\n \n ')
        console.log(`${roleName} was successfully added to the tracker!`)
    });
}

const insertEmployee = (firstName, lastName, role, manager) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`;

    db.query(sql, [firstName, lastName, role, manager], (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log('\n \n ')
        console.log(`${firstName} was successfully added to the tracker!`)
    });
}

const updateEmployeeRole = (roleId, employeeId) => {
    const sql = `UPDATE employees
                 SET role_id = ?
                 WHERE id = ?`;

    db.query(sql, [roleId, employeeId], (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log('\n \n ')
        console.log(`Employee's role was successfully updated!`)
    });
}

const updateEmployeeManager = (managerId, employeeId) => {
    const sql = `UPDATE employees
                 SET manager_id = ?
                 WHERE id = ?`;

    db.query(sql, [managerId, employeeId], (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log('\n \n ')
        console.log(`Employee's manager was successfully updated!`)
    });
}

const deleteDepartment = (departmentId) => {
    const sql = `DELETE FROM departments WHERE id = ?`

    db.query(sql, [departmentId], (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log('\n \n ')
        console.log(`Department successfully deleted!`)
    });
}

const deleteRole = (roleId) => {
    const sql = `DELETE FROM roles WHERE id = ?`

    db.query(sql, [roleId], (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log('\n \n ')
        console.log(`Role successfully deleted!`)
    });
}

const deleteEmployee = (employeeId) => {
    const sql = `DELETE FROM employees WHERE id = ?`

    db.query(sql, [employeeId], (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log('\n \n ')
        console.log(`Employee successfully deleted!`)
    });
}

module.exports = {
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
};