const db = require('../../db/connection')
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
    const sql = `SELECT e.id, e.first_name AS 'first name', e.last_name AS 'last name', roles.title, departments.name AS department, CONCAT('$', FORMAT(roles.salary, 0)) AS 'salary', m.first_name AS manager
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



module.exports = {
    getEmployees,
    getEmployeesByManager,
    getEmployeesByDepartment,
    getRoles,
    getDepartments,
    getBudgetUtilization
};