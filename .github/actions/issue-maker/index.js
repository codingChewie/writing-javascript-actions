const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
  try {
    const token = core.getInput('repo-token')
    const octokit = github.getOctokit(token)

    await octokit.rest.issues.create({
      repo: github.context.repo.repo,
      owner: github.context.repo.owner,
      title: core.getInput('issue-title'),
      body: core.getInput('joke'),
    })
  } catch (err) {
    core.setFailed(err.message)
  }
}

run()
