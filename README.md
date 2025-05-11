# pr-practices-ts
This is a basic TypeScript project that simulates a minimal Formula 1 data retriver. It allows you to see data from drivers and cars. 
The goal is to get familiar with Git collaboration through branches, pull requests, and code reviews, while also practicing clean and modular coding in TypeScript.

## Project Structure
This project consists of a **frontend** developed with **Angular** and a **backend** in **Node.js**.

The project is organized as follows:
```
src/
├── apps/
│ ├── frontend/ # Frontend source code (Angular)
│ └── backend/ # Backend source code (Node.js)
```

### Frontend (Angular)
The frontend is located under `src/apps/frontend`. This contains the Angular application that interacts with the backend to fetch and display data.

### Backend (Node.js)
The backend is located under `src/apps/backend`. This is the server that handles API requests and server-side logic.

## Installation
To get started with the project, follow these steps:

### 1. Fork and Clone the Repository
First, clone the repository to your local machine.
```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```

### 2. Install Dependencies
**Backend**
```bash
cd src/apps/backend
npm install
```

**Frontend**
```bash
cd src/apps/frontend
npm install
```

*Note*: If you don't have Node or Angular install it!
Node: https://nodejs.org/es (recommended version Node 22)
Angular:
```bash
npm install -g @angular/cli
```

### 3. Running the Project
**Backend**
```bash
cd src/apps/backend
npm run start
```
This will start the server on the configured port (http://localhost:3000).

**Frontend**
```bash
cd src/apps/frontend
ng serve
```
This will start the Angular app on the default port (http://localhost:4200).

## Excersice
The idea is to review the two PR's that I've prepared! But you can do a global review if you want and sent an email to your mentor.
