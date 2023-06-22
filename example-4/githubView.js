class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      this.display()
    });
  }

  display() {
    const repoInputEl = document.querySelector('#repo-name-input');
    const repoName = repoInputEl.value;

    this.client.getRepoInfo(repoName, repoData => {
      console.log(repoData)
      const name = document.querySelector('#repo-name')
      const description = document.querySelector('#repo-description')
      const logo = document.querySelector('#org-logo')

      name.innerHTML = repoData.full_name
      description.append(repoData.description)
      logo.src = repoData.organization.avatar_url
    });
  }
}

module.exports = GithubView;