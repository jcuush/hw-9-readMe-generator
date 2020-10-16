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
            "GNU GPL v3.0",
            "none"
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
// function used to determine what license was chosen and will later be used in init() function to display badge image through generateMarkdown.
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
}
// function to get information about each license from the link given above in getLicense() respectively.  I am sure there is a better method to read/write the text directly from the url instead of copying and pasting paragraphs in my line of code and will look into that in the future. I assume what I did was bad practice.
const getAbout = (license) => {

    if(license === "MIT") {
        return `MIT License
        Copyright (c) [year] [fullname]
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the 'Software'), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.`;
    }
    else if (license === "Apache 2.0") {
        return ` Copyright [yyyy] [name of copyright owner]

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
     
          http://www.apache.org/licenses/LICENSE-2.0
     
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`;
    }
    else if (license === "GNU GPL v3.0") {
        return `Copyright (C) <year>  <name of author>

        This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
        
    }
}

// function to initialize program
function init() {
    // inquirer prompt will cause the questions to appear for user
    inquirer
    .prompt(questions)
    .then(function(data){
        // set badge and about equal to the information called in function.  Will use badge and about in generateMarkdown() to get data from function to display.
       badge = getLicense(data.license);
       about = getAbout(data.license);
       
    
    // writes file 'README.md'
    fs.writeFile("README.md", generateMarkdown(data), function(error) {

        if(error) {
            return console.log(error);
        }
        console.log("New README file created!");
        })
    })
}

// function call to initialize program
init();
    

