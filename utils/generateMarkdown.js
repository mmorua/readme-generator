const generateMarkdown = (input) => {
    return `
# ${input.projectTitle}
    
## Description 
${input.projectDescription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${input.projectInstallation}

## Usage 
${input.projectUsage}

## License 
${input.projectLicense}

## Contributing 
Contributors should read the installation section. 

## Tests
${input.projectTests}

## Questions
If you have any questions about this project, please contact me directly at ${input.projectEmail} You can view more of my projects at https://github.com/${input.projectGithub}`;
}


module.exports = generateMarkdown;