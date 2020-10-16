// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${badge}
  

  ##Description

  ${data.description}

  ## Table of Contents

  [Description](#Description)
  [Installation](#Installation)
  [Usage](#Usage)
  [License](#License)
  [Contributions](#Contributions)
  [Test](#Test)
  [Questions](#Questions)

  ##Installation
  
  ${data.installation}

  ##Usage

  ${data.usage}

  ##License

  ${about}

  ##Contributions

  ${data.contributions}

  ##Test

  ${data.test}

  ##Questions

  github.com/${data.gitHubUser}

  If there are any questions about this project you can reach me at ${data.email} and I will get back to you as soon as possible.

`;
}

module.exports = generateMarkdown;
