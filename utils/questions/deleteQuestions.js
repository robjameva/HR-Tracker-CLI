const inquirer = require('inquirer');
const db = require('../../db/connection');

const removeQuestions = [
    {
        type: 'list',
        name: 'removeChoice',
        message: 'What would you like to remove?',
        choices: [
            'Remove a department',
            'Remove a role',
            'Remove an employee',
            'Back to main menu',
            'Quit'
        ],
        default: 0,
        loop: false
    }
];

const promptRemoveQuestions = () => inquirer.prompt(removeQuestions);

const promptDeleteDepartment = async () => {
    const list = [];
    const map = [];

    const sql = `SELECT id, name AS department
        FROM departments`;

    await db.promise().query(sql)
        .then(([rows]) => {
            rows.forEach(row => {
                list.push(row.department)
                map.push(row)
            })

        })

    const questions = [
        {
            type: 'list',
            name: 'departmentId',
            message: 'What department would you like to remove?',
            choices: list,
            default: 0,
            loop: false,
            filter(answer) {
                const depart = map.find(item => item.department === answer)
                const index = map.indexOf(depart)
                return map[index].id
            }
        }
    ];
    return inquirer.prompt(questions);
}

const promptDeleteRole = async () => {
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

    const questions = [
        {
            type: 'list',
            name: 'roleId',
            message: 'Which role would you like to delete?',
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
    return inquirer.prompt(questions);
}

const promptDeleteEmployee = async () => {
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

    const questions = [
        {
            type: 'list',
            name: 'employeeId',
            message: 'Who would you like to remove?',
            choices: employeeList,
            default: 0,
            loop: false,
            filter(answer) {
                const employee = employeeMap.find(item => item.first_name === answer)
                const index = employeeMap.indexOf(employee)
                return employeeMap[index].id
            }
        }
    ];
    return inquirer.prompt(questions);
}

module.exports = {
    promptRemoveQuestions,
    promptDeleteDepartment,
    promptDeleteRole,
    promptDeleteEmployee
}