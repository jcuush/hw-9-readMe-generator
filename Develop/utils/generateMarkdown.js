// function to generate markdown for README
// users github url is created simply by attaching it to end of github.com/
// the generateMardown function collects the data from function init() on index.js which collected data by using inquirer and then going through the array of questions
// badge and about were defined by using new function getLicense and getAbout and therefore don't need 'data.' before them.
function generateMarkdown(data) {
  return `# ${data.title}
  ${badge}


  ## Description

  ${data.description}

  ## Table of Contents

  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributions](#contributions)
  [Test](#test)
  [Questions](#questions)

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${about}

  ## Contributions

  ${data.contributions}

  ## Test

  ${data.test}

  ## Questions

  github.com/${data.gitHubUser}

  If there are any questions about this project you can reach me at ${data.email} and I will get back to you as soon as possible.

`;
}

module.exports = generateMarkdown;
