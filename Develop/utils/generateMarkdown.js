// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `# ${data.title}
  ${data.badge}

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

  ${data.license}

  ##Contributions

  ${data.contributions}

  ##Test

  ${data.test}

  ##Questions

  ${data.gitHubUser}
  ${data.email}

`;
}

module.exports = generateMarkdown;
