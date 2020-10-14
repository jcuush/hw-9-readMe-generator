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
            "email",
            "phone",
            "telekinesis"
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
function writeToFile(fileName, data) {
    generateMarkdown(data);
}

// function to initialize program
function init() {
    // inquirer prompt will cause the questions to appear for user
    inquirer
    .prompt(questions);
    // writes file 'README.md' , "utf8" encodes the raw buffer data in human-readable format
    fs.writeFile("README.md", "utf8", function(error, data) {

        if(error) {
            return console.log(error);
        }
        console.log(data);
    })
}

// function call to initialize program
init();
