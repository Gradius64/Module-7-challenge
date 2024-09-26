///GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');

console.log('my js');

function askforInput() {
    inquirer.createPromptModule([
        {
            type: 'input',
            name: 'projectTitle',
            mesage: 'What is the title of your Project?',

        },
        
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a description of your project:',
            },
            // Add more prompts as needed
        ])
        .then(answers => {
            console.log('Project Title:', answers.projectTitle);
            console.log('Description:', answers.description);
            // You can proceed to generate your README.md or other functionalities here
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    // Start the application
    askForInput();