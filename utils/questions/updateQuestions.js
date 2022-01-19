const inquirer = require('inquirer');
const db = require('../../db/connection');

const updateQuestions = [
    {
        type: 'list',
        name: 'updateChoice',
        message: 'What would you like to update?',
        choices: [
            'Update an employee role',
            'Update an employees manager',
            'Back to main menu',
            'Quit'
        ],
        default: 0,
        loop: false
    }
];

const promptUpdateQuestions = () => inquirer.prompt(updateQuestions);

const promptUpdateRole = async () => {
    const roleList = [];
    const roleMap = [];

    const sqlRole = `SELECT id, title 
        FROM roles`;

    await db.promise().query(sqlRole)
        .then(([rows]) => {
            rows.forEach(row => {
                roleList.push(row.title)
                roleMap.push(row)
            })
        })

    const employeeList = [];
    const employeeMap = [];

    const sqlEmployee = `SELECT id, first_name 
        FROM employees`;


    await db.promise().query(sqlEmployee)
        .then(([rows]) => {
            rows.forEach(row => {
                employeeList.push(row.first_name)
                employeeMap.push(row)
            })
        })

    const insertRoleArgs = [
        {
            type: 'list',
            name: 'employeeId',
            message: 'Who would you like to update?',
            choices: employeeList,
            default: 0,
            loop: false,
            filter(answer) {
                const employee = employeeMap.find(item => item.first_name === answer)
                const index = employeeMap.indexOf(employee)
                return employeeMap[index].id
            }
        },
        {
            type: 'list',
            name: 'roleId',
            message: 'What role will this employee work as?',
            choices: roleList,
            default: 0,
            loop: false,
            filter(answer) {
                const role = roleMap.find(item => item.title === answer)
                const index = roleMap.indexOf(role)
                return roleMap[index].id
            }
        }
    ];
    return inquirer.prompt(insertRoleArgs);
}

const promptUpdateManager = async () => {
    const managerList = [];
    const managerMap = [];

    const sqlManager = `SELECT id, first_name 
        FROM employees
        WHERE manager_id IS NULL`;


    await db.promise().query(sqlManager)
        .then(([rows]) => {
            rows.forEach(row => {
                managerList.push(row.first_name)
                managerMap.push(row)
            })
        })

    const employeeList = [];
    const employeeMap = [];

    const sqlEmployee = `SELECT id, first_name 
        FROM employees`;


    await db.promise().query(sqlEmployee)
        .then(([rows]) => {
            rows.forEach(row => {
                employeeList.push(row.first_name)
                employeeMap.push(row)
            })
        })

    const insertRoleArgs = [
        {
            type: 'list',
            name: 'employeeId',
            message: 'Who would you like to update?',
            choices: employeeList,
            default: 0,
            loop: false,
            filter(answer) {
                const employee = employeeMap.find(item => item.first_name === answer)
                const index = employeeMap.indexOf(employee)
                return employeeMap[index].id
            }
        },
        {
            type: 'list',
            name: 'managerId',
            message: 'Who will they report to?',
            choices: managerList,
            default: 0,
            loop: false,
            filter(answer) {
                const manager = managerMap.find(item => item.first_name === answer)
                const index = managerMap.indexOf(manager)
                return managerMap[index].id
            }
        }
    ];
    return inquirer.prompt(insertRoleArgs);
}

module.exports = {
    promptUpdateQuestions,
    promptUpdateRole,
    promptUpdateManager
}