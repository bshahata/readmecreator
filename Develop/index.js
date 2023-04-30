// Import required modules
const inquirer = require('inquirer');
const fs = require('fs');

// Prompt user for project information
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please provide a brief description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions for your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do users use your project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines for your project?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'What are the test instructions for your project?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'list',
      message: 'Which license would you like to use for your project?',
      choices: ['MIT', 'GNU', 'Apache'],
      name: 'license',
    },
  ])
  // Create the README.md file with provided project information
  .then((answers) => {
    // Destructure the answers object for easier use
    const {
      title,
      description,
      installation,
      usage,
      contribution,
      tests,
      github,
      email,
      license,
    } = answers;

    // Create the README content
    const readmeContent = `# ${title}\n\n` +
      `## Description\n\n${description}\n\n` +
      `## Table of Contents\n\n` +
      `- [Installation](#installation)\n` +
      `- [Usage](#usage)\n` +
      `- [Contributing](#contributing)\n` +
      `- [Tests](#tests)\n` +
      `- [License](#license)\n\n` +
      `## Installation\n\n${installation}\n\n` +
      `## Usage\n\n${usage}\n\n` +
      `## Contributing\n\n${contribution}\n\n` +
      `## Tests\n\n${tests}\n\n` +
      `## License\n\nThis project is licensed under the ${license} License.\n\n` +
      `## Questions\n\n` +
      `For additional questions or comments, please contact ${github} at ${email}.\n`;

    // Write the README file to the output directory
    fs.writeFile('./output/README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md successfully created in the output directory!');
      }
    });

    function init() {
        inquirer.prompt(questions)
        .then(function(data) {
            console.log(data);
        let fileName = markdownGen(data);
        writeToFile(fileName);
        })
    }

    init();
  });


