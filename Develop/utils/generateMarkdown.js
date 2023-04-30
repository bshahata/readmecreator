const getIndex = require('../index');

// Returns license badges
function renderLicenseBadge(license) {
  switch (license) {
    case 'None':
      return '';
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Boost 1.0':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    default:
      return '';
  }
}

// Returns license links
function renderLicenseLink(license) {
  switch (license) {
    case 'None':
      return '';
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'Boost 1.0':
      return '(https://www.boost.org/LICENSE_1_0.txt)';
    case 'Apache 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
}

// Returns license section to README file
function renderLicenseSection(license) {
  return license === 'None' ? '' : `license: ${license}`;
}

// Creates markdown for the README file
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contributions,
    license,
    tests,
    github,
    email,
  } = data;

  return `# ${title}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license)
* [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributions
${contributions}

## License
${renderLicenseSection(license)} ${renderLicenseBadge(license)}
${renderLicenseLink(license)}

## Tests
${tests}

## Questions
Contact me:
* Github: https://github.com/${github}
* Email: ${email}`;
}

module.exports = generateMarkdown;
