const inquirer = require('inquirer');
const db = require('../../db/connection');

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

const promptInsertRole = async () => {
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

const promptInsertEmployee = async () => {
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

    const insertRoleArgs = [
        {
            type: 'input',
            name: 'firstName',
            message: 'Please enter first name:',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter first name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Please enter last name:',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter last name!');
                    return false;
                }
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


const promptAddQuestions = () => inquirer.prompt(addQuestions);
const promptInsertDepartment = () => inquirer.prompt(insertDepartmentArgs);

module.exports = {
    promptAddQuestions,
    promptInsertDepartment,
    promptInsertRole,
    promptInsertEmployee
}