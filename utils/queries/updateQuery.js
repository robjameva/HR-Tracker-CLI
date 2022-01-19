const db = require('../../db/connection')
const cTable = require('console.table');

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

module.exports = {
    updateEmployeeRole,
    updateEmployeeManager
};