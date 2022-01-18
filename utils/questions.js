const getDeptIdAsync = require('../utils/utils')
const inquirer = require('inquirer');
const db = require('../db/connection');
const { indexOf } = require('lodash');


const initialQuestions = [
    {
        type: 'list',
        name: 'startMenu',
        message: 'Welcome to HR Tracker Plus: What would you like to do?',
        choices: [
            'View Records',
            'Add Records',
            'Update Records',
            'Delete Records',
            'Quit'
        ],
        default: 0,
        loop: false
    }
];

const viewQuestions = [
    {
        type: 'list',
        name: 'viewChoice',
        message: 'What do would you like to view?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'View employees by manager',
            'View employees by department',
            'View budget utilization',
            'Back to main menu',
            'Quit'
        ],
        default: 0,
        loop: false
    }
];

const addQuestions = [
    {
        type: 'list',
        name: 'addChoice',
        message: 'What would you like to add?',
        choices: [
            'Add a department',
            'Add a role',
            'Add an employee',
            'Back to main menu',
            'Quit'
        ],
        default: 0,
        loop: false
    }
];

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

const insertDepartmentArgs = [
    {
        type: 'input',
        name: 'departmentName',
        message: 'Please enter the department name:',
        validate: departmentName => {
            if (departmentName) {
                return true;
            } else {
                console.log('Please enter the department name!');
                return false;
            }
        }
    }
];

const promptInsertrole = async () => {
    const list = [];
    const map = []

    const sql = `SELECT id, name AS department
        FROM departments`;

    await db.promise().query(sql)
        .then(([rows, fields]) => {
            rows.forEach(row => {
                list.push(row.department)
                map.push(row)
            })

        })

    const insertRoleArgs = [
        {
            type: 'input',
            name: 'roleName',
            message: 'Please enter the name of the new role:',
            validate: roleName => {
                if (roleName) {
                    return true;
                } else {
                    console.log('Please enter the name of the new role!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'Please enter the salary of the new role:',
            validate: roleSalary => {
                if (roleSalary) {
                    return true;
                } else {
                    console.log('Please enter the salary of the new role!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'departmentId',
            message: 'What department does this role belong to?',
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
    return inquirer.prompt(insertRoleArgs);
}





module.exports = {
    initialQuestions,
    viewQuestions,
    addQuestions,
    insertDepartmentArgs,
    updateQuestions,
    removeQuestions,
    promptInsertrole
}