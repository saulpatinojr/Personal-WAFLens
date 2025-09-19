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
    cd waflens-7c15e
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
- The `.firebaserc` file is already configured with your project ID: `waflens-7c15e`.
- Log in to Firebase using the CLI:
    ```bash
    firebase login
    ```

### 3. Environment Variables

#### Gemini API Key
This project uses Genkit to interact with Google's Gemini models, which requires an API key. You can get a key from [Google AI Studio](https://aistudio.google.com/app/apikey).

-   **Local Development**: Create a file named `.env.local` in the root of your project and add your API key to it:
    ```
    GEMINI_API_KEY="your-api-key-here"
    ```
    This file is included in `.gitignore` and will not be committed to your repository.

-   **Production (Firebase)**: You must add the Gemini API key as a secret in GitHub Actions so the deployment workflow can access it.
    1. In your GitHub repository, go to **Settings > Secrets and variables > Actions**.
    2. Click **New repository secret**.
    3. Name the secret `GEMINI_API_KEY`.
    4. Paste your API key as the value.

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
For the deployment to work, you must configure secrets in your GitHub repository settings:

1.  **`FIREBASE_SERVICE_ACCOUNT_WAFLENS_7C15E`**:
    - In the Firebase Console, go to **Project settings > Service accounts**.
    - Click **Generate new private key** to download a JSON file.
    - In your GitHub repository, go to **Settings > Secrets and variables > Actions**.
    - Click **New repository secret**.
    - Name the secret `FIREBASE_SERVICE_ACCOUNT_WAFLENS_7C15E`.
    - Paste the entire content of the downloaded JSON file as the secret's value.

2.  **`GEMINI_API_KEY`**:
    - Follow the steps above to add your Gemini API key as a secret named `GEMINI_API_KEY`.

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

## Important Notes

- **Next.js `devIndicators.buildActivity` Deprecation**: The `devIndicators.buildActivity` option in `next.config.ts` is deprecated and has been removed. Please ensure your `next.config.ts` does not contain this property to avoid warnings or errors. The current configuration has been updated to reflect this change.
