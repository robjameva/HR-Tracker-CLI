const db = require('../../db/connection')
const cTable = require('console.table');

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
    deleteDepartment,
    deleteRole,
    deleteEmployee
};