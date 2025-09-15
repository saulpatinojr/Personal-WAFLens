# WAFLens Project

This project is a web application built with a modern front-end framework and Firebase services.

## Project Setup

### Prerequisites
- Node.js and npm
- Firebase CLI (`npm install -g firebase-tools`)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```
2.  **Install root dependencies:**
    ```bash
    npm install
    ```
3.  **Install Firebase Functions dependencies:**
    ```bash
    cd functions
    npm install
    cd ..
    ```

### Configuration
1.  **Firebase Project:**
    - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
    - Update the `.firebaserc` file with your Firebase project ID.
2.  **Environment Variables:**
    - For sensitive data, use environment variables. A `.env.local` file can be created in the root for local development. This file is included in `.gitignore` and should not be committed.
    - For Firebase Functions, set environment variables using the Firebase CLI:
      ```bash
      firebase functions:config:set your_service.key="your-api-key" your_service.id="your-service-id"
      ```

## Available Scripts

-   `npm run dev`: Runs the front-end application in development mode.
-   `npm run build`: Builds the application for production.
-   `npm start`: Starts the production server.

### Firebase Functions Scripts (in `functions/` directory)
-   `npm run serve`: Emulates functions locally.
-   `npm run deploy`: Deploys functions to Firebase.

## Deployment

This project is configured for continuous deployment using GitHub Actions.

1.  **Push to `main`:** Any push to the `main` branch will trigger the workflow defined in `.github/workflows/main.yml`.
2.  **Workflow Steps:**
    -   Checks out the code.
    -   Installs dependencies and builds the front-end application.
    -   Deploys the built front-end to Firebase Hosting.
    -   Deploys the Firebase Functions.

3.  **GitHub Secrets:**
    -   You must configure the `FIREBASE_SERVICE_ACCOUNT_YOUR_PROJECT_ID` secret in your GitHub repository settings. This is a JSON service account key for your Firebase project that allows GitHub Actions to authenticate with Firebase.
