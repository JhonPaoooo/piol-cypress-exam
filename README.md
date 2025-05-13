# Cypress Project Setup

### 1. Create a GitHub Repository
- Go to GitHub and log in.

- Create a new repository named: yourname-cypress-exam.

### 2. Set Up Local Project Folder
- On your desktop, create a folder named: Cypress-Projects.

### 3. Open VS Code and Navigate to the Folder
- Open Visual Studio Code.

- Open a terminal and run:

```bash
cd Desktop/Cypress-Projects
```

### 4. Clone Your GitHub Repository
- Clone your newly created GitHub repository:

```bash
git clone <your-repo-url>
```

### 5. Navigate into the Project Folder
- Run the following command to navigate into the Project Folder:

```bash
cd yourname-cypress-exam
```

### 6. Initialize the Project
- Run the following command to initialize the project and create a package.json file:

```bash
npm init -y
```

### 7. Install Cypress
- Run the following command to install cypress

```bash
npm install cypress --save-dev
```

### 8. Open Cypress
- Run the following command to launch cypress

```bash
npx cypress open
```
- Cypress will open its Test Runner interface.

### 9. Configure Cypress for E2E Testing
In the Cypress window:

- Click "E2E Testing"

- Click "Continue"

- Choose your preferred browser (e.g., Chrome, Electron)

- Click "Start E2E Testing in Chrome"

- Click "Create new empty spec"

- Optionally rename the spec.cy.ts file

- Click "Create Spec"

- Click "Okay, run the spec"

# Running the Tests

### Headless Mode
- Go to package.json file 

- Locate for "scripts" code

- Type any name for the headless mode (e.g. "exam")

- Type "npx cypress open --config-file 'your file location' --browser chrome"

- Final result - "exam": "npx cypress open --config-file 'cypress/e2e/regression-testing/registration.cy.js' --browser chrome"

- To test, open the terminal and type "npx cypress run exam"

### Headed Mode
- Go to terminal

- Type "npx cypress open" to open the cypress