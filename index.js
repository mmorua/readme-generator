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
            type: 'confirm',
            message: 'Do you want to add a description to your project?'
        }, // When I answer yes or no for this confirm prompt I want to be able to add a description if I choose yes, not return true or false.
        {
            name: 'projectInstallation',
            type: 'confirm',
            message: 'Do you want to add installation instructions to your project?',
        },
        {
            name: 'projectUsage',
            type: 'confirm',
            message: 'Do you want to add usage instructions to your project?'
        },
        {
            name: 'projectLicense',
            type: 'confirm',
            message: 'Do you want to add a license to your project?'
        },
        {
            name: 'projectTests',
            type: 'confirm',
            message: 'Would you like to add test instructions to your project?'
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