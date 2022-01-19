const inquirer = require('inquirer');


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

const promptViewQuestions = () => inquirer.prompt(viewQuestions);



module.exports = promptViewQuestions;