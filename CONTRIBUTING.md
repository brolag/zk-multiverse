# Contributing to ZK Multiverse

Welcome to ZK Multiverse! We’re excited to have you on board and can’t wait to see what you’ll bring to this project. Whether you're here to suggest new features, fix bugs, or contribute code, this guide will help you get started.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it to understand the expectations we have for contributors.

## Getting Started

### 1. Fork the Repository

Start by creating your own fork of the ZK Multiverse repository. This will allow you to make changes without affecting the original project.

```bash
bashCopiar código
git clone https://github.com/yourusername/zk-multiverse.git
cd zk-multiverse

```

### 2. Create a New Branch

Before starting work on a new feature or bug fix, create a new branch. This helps keep your changes organized and makes it easier to submit a pull request later.

```bash
bashCopiar código
git checkout -b feature-name

```

### 3. Install Dependencies

Make sure you have all the necessary dependencies installed to run the project locally.

```bash
bashCopiar código
yarn install

```

### 4. Run the Project Locally

ZK Multiverse is a complex project that involves multiple components. Follow these steps to get it running locally:

1. **Start a Local Ethereum Network**
    
    Open a terminal and run:
    
    ```bash
    bashCopiar código
    yarn chain
    
    ```
    
2. **Deploy the Test Contract**
    
    In a second terminal, deploy a test smart contract:
    
    ```bash
    bashCopiar código
    yarn deploy
    
    ```
    
3. **Launch the NextJS App**
    
    Finally, in a third terminal, start the NextJS app:
    
    ```bash
    bashCopiar código
    yarn start
    
    ```
    
    Visit your app at `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page.
    

### 5. Test Your Changes

Before submitting your changes, run the existing tests or add new ones to ensure that everything works as expected.

```bash
bashCopiar código
yarn hardhat:test

```

## Making Changes

### Feature Requests and Bug Fixes

We welcome all types of contributions. Here’s how you can contribute effectively:

1. **Open an Issue**: Before you start working on a significant change, open an issue to discuss the proposed feature or bug fix. This helps ensure that your work aligns with the project’s goals and avoids duplicate efforts.
2. **Discuss Your Approach**: Share your plan for implementing the feature or fixing the bug. Feedback from maintainers or other contributors can help improve your approach.

### Coding Guidelines

- **Follow the Project Structure**: Maintain the project’s existing structure and organization. Consistent code is easier to maintain and understand.
- **Write Clear and Concise Code**: Use meaningful variable names, and add comments where necessary. Aim for simplicity and clarity.
- **Commit Messages**: Write descriptive commit messages that explain the "what" and "why" of your changes.

### Submitting a Pull Request

1. **Push Your Changes**: After committing your changes, push them to your fork.
    
    ```bash
    bashCopiar código
    git push origin feature-name
    
    ```
    
2. **Open a Pull Request**: Navigate to the original repository on GitHub and open a pull request from your branch. Provide a clear and descriptive title and explain your changes in detail.
3. **Request a Review**: Tag one of the maintainers to review your pull request. Be open to feedback and make any necessary changes.

### Reviewing and Merging

- **Code Review**: All pull requests are subject to review by maintainers. They will check for code quality, adherence to guidelines, and overall fit with the project.
- **Merge Process**: Once approved, your pull request will be merged into the main branch. In some cases, maintainers may request additional changes before merging.

## Contributing Beyond Code

Contributions aren’t limited to code! You can also:

- **Create or Update Documentation**: Help others by improving or adding to the project documentation.
- **Design New Challenges**: Contribute by designing new cryptographic challenges or puzzles for the game.
- **Report Bugs**: If you find a bug, report it by opening an issue. Provide as much detail as possible, including steps to reproduce the issue.

## Need Help?

If you have any questions or need help getting started, feel free to open an issue.

Thank you for contributing to ZK Multiverse!