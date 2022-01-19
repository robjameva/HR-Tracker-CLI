const inquirer = require('inquirer');

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

const startApp = () => inquirer.prompt(initialQuestions);


module.exports = startApp;