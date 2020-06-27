// function to generate markdown for README
function generateMarkdown(response) {
  return `

# ${response.Title}
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

## Description
${response.Discription}

## Installation
${response.Install}

## Usage
${response.Usage}

## License
${response.License}

## Contributors
${response.Contributors}

## Test
${response.Test}

## Questions
If you want to contact me:

Github:[${response.Github}](https://github.com/KJohnson3288)

Email:[${response.Email}](https://github.com/KJohnson3288)

`;}

module.exports = generateMarkdown
