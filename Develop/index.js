// requires generateMarkdown js for const
const generateMarkdown = require("./utils/generateMarkdown");
var inquirer = require("inquirer")
// fs is a Node standard library package for reading and writing files
var fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of this project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation"
    },
    {
        type: "list",
        message: "What type of license is on this application?",
        name: "license",
        choices: [
            "MIT",
            "Apache 2.0",
            "GNU GPL v3.0"
        ]
    },
    {
        type: "input",
        message: "What is the project usage?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contributions guidelines?",
        name: "contributions"
    },
    {
        type: "input",
        message: "Provide the project tests",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHubUser"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }

];

// function to write README file
// function writeToFile(fileName, data) {
//     generateMarkdown(data);
// }

// function to initialize program
function init() {
    // inquirer prompt will cause the questions to appear for user
    inquirer
    .prompt(questions)
    .then(function(data){
        const getLicense = (license) => {
            if(license === "MIT") {
                return `\r[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
            }
            else if (license === "Apache 2.0") {
                return `\r[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
            }
            else if (license === "GNU GPL v3.0") {
                return `\r[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
            }
            getLicense() = license;
        }


    
    // writes file 'README.md'
    fs.writeFile("READMEE.md", generateMarkdown(data), function(error) {

        if(error) {
            return console.log(error);
        }
        console.log("New README file created!");
        })
    })
}

// function call to initialize program
init();
