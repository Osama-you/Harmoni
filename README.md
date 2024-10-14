# Harmoni Monorepo

This is the **Harmoni**, which houses both the **frontend** and **backend** applications as well as shared libraries using **Lerna** and **pnpm** for package management.

## Project Structure

The project is organized into two main sections: `apps/` for the frontend and backend applications, and `libs/` for shared libraries.

```
/harmoni
│
├── apps/
│   ├── backend/      # Backend application (e.g., NestJS)
│   └── frontend/     # Frontend application (e.g., React or Electron)
│
├── libs/
│   └── shared/       # Shared libraries or utilities
│
├── pnpm-workspace.yaml   # pnpm workspace configuration
├── lerna.json            # Lerna configuration
└── package.json          # Root package.json
```

## Prerequisites# Harmoni

This is the **Harmoni**, which houses both the **frontend** and **backend** applications as well as shared libraries using **Lerna** and **pnpm** for package management.

## Project Structure

The project is organized into two main sections: `apps/` for the frontend and backend applications, and `libs/` for shared libraries.

- **pnpm**: You must have pnpm installed globally. Install it using:

  ```bash
  npm install -g pnpm
  ```

- **Lerna**: Lerna is used for managing the monorepo. Add it to the project by running:
  ```bash
  pnpm add -D lerna
  ```

## Installation

After cloning the repository, run the following command to install all dependencies for the frontend, backend, and shared libraries:

```bash
pnpm install
```

## Running the Applications

- **Frontend**: To start the frontend application, run:

  ```bash
  pnpm --filter frontend run start
  ```

- **Backend**: To start the backend application, run:
  ```bash
  pnpm --filter backend run start
  ```

You can also run both applications concurrently using Lerna:

```bash
npx lerna run start
```

## Linting and Formatting

To lint the code and automatically fix issues, you can run the following:

```bash
pnpm run lint
```
