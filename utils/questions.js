
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

module.exports = {
    initialQuestions,
    viewQuestions,
    addQuestions,
    updateQuestions,
    removeQuestions
}