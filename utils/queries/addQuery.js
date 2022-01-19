const db = require('../../db/connection')
const cTable = require('console.table');

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

module.exports = {
    insertDepartment,
    insertRole,
    insertEmployee
};