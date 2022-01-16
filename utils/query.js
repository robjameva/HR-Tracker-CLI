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
        console.table(['id', 'first_name', 'last_name', 'role id', 'manager id'], rows);
    });
}

const getRoles = () => {
    const sql = `SELECT roles.id, title, salary, departments.name AS department
                 FROM roles
                 LEFT JOIN departments ON roles.department_id = departments.id`;

    db.query(sql, (err, rows) => {
        if (err) console.log({ error: err.message });
        console.table(['id', 'title', 'salary', 'dapartment'], rows);
    });
}

const getDepartments = () => {
    const sql = `SELECT id, name
                 FROM departments`;

    db.query(sql, (err, rows) => {
        if (err) console.log({ error: err.message });
        console.table(['id', 'dapartment'], rows);
    });
}

module.exports = { getEmployees, getRoles, getDepartments };