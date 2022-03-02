const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

inquirer.prompt(
    [
        {
            name: 'projectTitle',
            type: 'input',
            message: 'What is the title of your project?'
        },
        {
            name: 'projectDescription',
            type: 'input',
            message: 'What is the description of your project?'
        }, 
        {
            name: 'projectInstallation',
            type: 'input',
            message: 'What are the installation instructions of your project?'
        },
        {
            name: 'projectUsage',
            type: 'input',
            message: 'What are the usage instructions of your project?'
        },
        {
            name: 'projectLicense',
            type: 'input',
            message: 'What is the license of your project?'
        },
        {
            name: 'projectTests',
            type: 'input',
            message: 'What are the test instructions of your project?'
        },
        {
            name: 'projectEmail',
            type: 'input',
            message: 'For questions, what is your email?'
        },
        {
            name: 'projectGithub',
            type: 'input',
            message: 'For questions, what is your GitHub username?'
        },
    ])
    .then((answers) => {
        const template = generateMarkdown(answers)

        fs.writeFile('./dist/README.md', template, () => {
            console.log('README successfully generated!');
        })
    });