const inquirer = require('inquirer');
const {
    initialQuestions,
    viewQuestions,
    addQuestions,
    updateQuestions,
    removeQuestions
} = require('./utils/questions');
// const handleResponse = require('./utils/utils');

const startApp = () => inquirer.prompt(initialQuestions);
const promptViewQuestions = () => inquirer.prompt(viewQuestions);
const promptAddQuestions = () => inquirer.prompt(addQuestions);
const promptUpdateQuestions = () => inquirer.prompt(updateQuestions);
const promptRemoveQuestions = () => inquirer.prompt(removeQuestions);

const handleViewResponse = response => {
    switch (response) {
        case 'View all departments':

            break;
        case 'View all roles':

            break;
        case 'View all employees':

            break;
        case 'View employees by manager':

            break;
        case 'View employees by department':

            break;
        case 'View budget utilization':

            break;
        case 'Back to main menu':
            return startApp().then(response => handleResponse(response.startMenu))
        case 'Quit':
            console.log('Thank you for using HR Plus!')
            break;
    }
}

const handleAddResponse = response => {
    switch (response) {
        case 'Add a department':

            break;
        case 'Add a role':

            break;
        case 'Add an employee':

            break;
        case 'Back to main menu':
            return startApp().then(response => handleResponse(response.startMenu))
        case 'Quit':
            console.log('Thank you for using HR Plus!')
            break;
    }
}

const handleUpdateResponse = response => {
    switch (response) {
        case 'Update an employee role':

            break;
        case 'Update an employees manager':

            break;
        case 'Back to main menu':
            return startApp().then(response => handleResponse(response.startMenu))
        case 'Quit':
            console.log('Thank you for using HR Plus!')
            break;
    }
}

const handleDeleteResponse = response => {
    switch (response) {
        case 'Remove a department':

            break;
        case 'Remove a role':

            break;
        case 'Remove an employee':

            break;
        case 'Back to main menu':
            return startApp().then(response => handleResponse(response.startMenu))
        case 'Quit':
            console.log('Thank you for using HR Plus!')
            break;
    }
}

const handleResponse = response => {
    switch (response) {
        case 'View Records':
            promptViewQuestions()
                .then(response => handleViewResponse(response.viewChoice));
            break;
        case 'Add Records':
            promptAddQuestions()
                .then(response => handleAddResponse(response.addChoice));
            break;
        case 'Update Records':
            promptUpdateQuestions()
                .then(response => handleUpdateResponse(response.updateChoice));
            break;
        case 'Delete Records':
            promptRemoveQuestions()
                .then(response => handleDeleteResponse(response.removeChoice));
            break;
        case 'Quit':
            console.log('Thank you for using HR Plus!')
            break;
    }
}

startApp()
    .then(response => handleResponse(response.startMenu));



module.exports = startApp;