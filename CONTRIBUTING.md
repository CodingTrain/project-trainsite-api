Contributing to Project TrainSite API
=====================================

Yay! Thanks for considering to contribute to this project!
To make sure your contribution can be merged into the main repository, please follow this short guide.
If you encounter any questions, feel free to reach out to us at any time!


## Workflow

- **Fork this repository** using the "Fork" button in the top right corner
- **Create a feature branch** based off of the most recent commit on `develop` following this naming convention: `feature/<short-description>` (see more [below](#git-flow))
- **Do your thing!** 👩‍💻 👨‍💻
- **Write tests** for everything you added/modified to make sure everything works as expected (coming soon™️)
- **Rebase your feature branch** so it is up to date with the most recent development branch (this reduces issues when merging later and keeps the history nice and clean)
- **Make a pull request** to this repository's `develop` branch
- **Be happy!** 🎉

If you have any questions about the above described workflow, please reach out to us!
We're more than happy to help!


## Guidelines

Please follow these guidelines whilst developing. This helps keeping the code nice and organized.

- Don't work directly on the `master` or `develop` branches (see [below](#git-flow))!
- Run `yarn lint` every time before creating a new commit!
- If you encounter formatting issues, try `yarn format`
- If you encounter formatting/linting issues, try `yarn fix`
- Run `yarn test` every time before submitting a pull request (coming soon™️)

*Note: Formatting and linting will be done through git hooks automatically for you!*


## How To Write Good Commits

This is merely a suggestion in case you are uncertain.

- Make sure that your commit is *atomic* (only one semantic change) and
  deployable (no syntax errors, bugs, etc. - it can go straight to production)
- Keep the commit message subject short and concise
- Have it start with a verb, e.g. *Add some cool feature*
- You may want to pick a symbol that can be placed in front of the commit
  subject line that provides a visual representation of what the commit does
  (see https://gitmoji.carloscuesta.me/ for example)
- Use the commit message body to provide more detailed information about *why*
  this change was necessary (only useful for "bigger" commits)


## Git Flow

This project (mostly) uses the Git Flow branching model.
To learn more about Git Flow, check out the original post [here](https://nvie.com/posts/a-successful-git-branching-model/).

> **Quick Tip: Create a feature branch**  
> To create a new feature branch, use `git checkout -b feature/<your-feature-name> develop` or
> use the `git flow feature start <your-feature-name>` command if installed.

These are the settings used with Git Flow:
```
Branch name for production releases:          master
Branch name for "next release" development:   develop
Feature branches:                             feature/
Release branches:                             release/
Hotfix branches:                              hotfix/
Support branches:                             support/
Version tag prefix:                           v
```
