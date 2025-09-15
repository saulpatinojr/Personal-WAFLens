# WAFLens Project

This project is a web application built with Next.js, TypeScript, and Firebase. It's designed to be a well-structured, secure, and easily deployable application.

## 🚀 Project Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)
- [Firebase CLI](https://firebase.google.com/docs/cli) (`npm install -g firebase-tools`)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd waflens
    ```
2.  **Install root dependencies:**
    These are the dependencies for your Next.js front-end application.
    ```bash
    npm install
    ```
3.  **Install Firebase Functions dependencies:**
    Navigate to the `functions` directory and install its specific dependencies.
    ```bash
    cd functions
    npm install
    cd ..
    ```

---

## 🔥 Firebase Configuration

### 1. Create a Firebase Project
- Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
- Once created, you'll need the **Project ID**.

### 2. Link Your Local Project
- Update the `.firebaserc` file with your Firebase Project ID. Replace `your-project-id` with the actual ID from the Firebase console.
    ```json
    {
      "projects": {
        "default": "your-project-id"
      }
    }
    ```
- Log in to Firebase using the CLI:
    ```bash
    firebase login
    ```

### 3. Environment Variables
- For sensitive data used in your front-end, create a `.env.local` file in the root directory. This file is ignored by Git and is safe for local development secrets.
    ```
    NEXT_PUBLIC_API_KEY="your-public-api-key"
    ```
- For Firebase Functions, set environment variables using the Firebase CLI. This is the secure way to store secrets like API keys for your backend services.
    ```bash
    firebase functions:config:set your_service.key="your-api-key" your_service.id="your-service-id"
    ```

---

## 📜 Available Scripts

-   `npm run dev`: Runs the Next.js front-end in development mode.
-   `npm run build`: Builds the application for production.
-   `npm start`: Starts the production Next.js server.
-   `npm run lint`: Lints the codebase for errors.

### Firebase Functions Scripts (from the `functions/` directory)
-   `npm run serve`: Emulates functions locally for testing.
-   `npm run deploy`: Deploys only the functions to your Firebase project.

---

## 🚀 Deployment with GitHub Actions

This project is configured for Continuous Integration and Continuous Deployment (CI/CD) using GitHub Actions.

### How It Works
1.  **Trigger**: The workflow, defined in `.github/workflows/main.yml`, is automatically triggered on every push to the `main` branch.
2.  **Build**: The workflow installs all dependencies and builds the Next.js application (`npm run build`).
3.  **Deploy**:
    - The built front-end application is deployed to **Firebase Hosting**.
    - The Firebase Functions in the `functions/` directory are deployed to **Firebase Functions**.

### GitHub Secrets Configuration
For the deployment to work, you must configure a secret in your GitHub repository settings:

1.  **Create a Service Account Key:**
    - In the Firebase Console, go to **Project settings > Service accounts**.
    - Click **Generate new private key** to download a JSON file.
2.  **Add the Secret to GitHub:**
    - In your GitHub repository, go to **Settings > Secrets and variables > Actions**.
    - Click **New repository secret**.
    - Name the secret `FIREBASE_SERVICE_ACCOUNT_YOUR_PROJECT_ID` (replace `YOUR_PROJECT_ID` with your actual Firebase project ID).
    - Paste the entire content of the downloaded JSON file as the secret's value.

---

## 🔒 Security Rules

The `firestore.rules` file provides a basic security template. By default, it denies all reads and writes to your database.

```rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Deny all reads and writes by default.
    // Allow reads only for authenticated users.
    match /{document=**} {
      allow read: if request.auth != null;
      allow write: if false; // Explicitly deny writes for now
    }
  }
}
```
This is a starting point. You should update these rules to match your application's data access patterns.
