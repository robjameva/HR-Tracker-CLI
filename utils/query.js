const db = require('../db/connection')
const cTable = require('console.table');

const getEmployees = () => {
    const sql = `SELECT e.id, e.first_name, e.last_name, roles.title, departments.name AS department, roles.salary, m.first_name AS Manager
                 FROM employees e
                 LEFT JOIN employees m ON e.manager_id = m.id
                 LEFT JOIN roles ON e.role_id = roles.id
                 LEFT JOIN departments ON roles.department_id = departments.id`;

    db.query(sql, (err, rows) => {
        if (err) console.log({ error: err.message });
        console.table(rows);
    });
}

const getRoles = () => {
    const sql = `SELECT roles.id, title, salary, departments.name AS department
                 FROM roles
                 LEFT JOIN departments ON roles.department_id = departments.id`;

    db.query(sql, (err, rows) => {
        if (err) console.log({ error: err.message });
        console.table(rows);
    });
}

const getDepartments = () => {
    const sql = `SELECT id, name AS department
                 FROM departments`;

    db.query(sql, (err, rows) => {
        if (err) console.log({ error: err.message });
        console.table(rows);
    });
}

const insertDepartment = departmentName => {
    const sql = `INSERT INTO departments (name)
    VALUES (?)`;

    db.query(sql, departmentName, (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log(`${departmentName} was successfully added to the tracker!`)
    });
}

const insertRole = (roleName, salary, department) => {
    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?, ?, ?)`;

    db.query(sql, [roleName, salary, department], (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log(`${roleName} was successfully added to the tracker!`)
    });
}

const insertEmployee = (firstName, lastName, role, manager) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`;

    db.query(sql, [firstName, lastName, role, manager], (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log(`${firstName} was successfully added to the tracker!`)
    });
}

const updateEmployee = (role, employeeId) => {
    const sql = `UPDATE employees
                 SET role_id = ?
                 WHERE id = ?`;

    db.query(sql, [role, employeeId], (err, result) => {
        if (err) return console.log({ error: err.message });
        console.log(`Employee was successfully updated!`)
    });
}

module.exports = {
    getEmployees,
    getRoles,
    getDepartments,
    insertDepartment,
    insertRole,
    insertEmployee,
    updateEmployee
};