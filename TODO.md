# TODO

This document outlines the next steps for the WAFLens project. The initial deployment and setup are complete, and the following tasks are the priority for future development.

## 1. Re-implement AI Functionality
The application build was failing because the AI functionality was attempting to run on the client side. To resolve this, we must re-implement the AI logic in a server-side environment.

- **Action:** Create Next.js API Routes in `src/app/api` to house the AI logic.
- **Details:** The client-side components will make API calls to these server-side endpoints. This approach is recommended as it allows the project to maintain its static site export (`output: 'export'`) for a fast front-end experience while leveraging a server for intensive tasks.

## 2. Implement User Authentication
To secure the application and provide personalized experiences, user authentication is a critical next step.

- **Action:** Integrate Firebase Authentication.
- **Details:** Implement sign-in/sign-up flows and protect routes and data based on user authentication status. Update Firestore security rules in `firestore.rules` to reflect the authentication logic.

## 3. Connect Front-End to Data Connect
The Data Connect schema and SDK are in place, but the front-end components are still using placeholder data.

- **Action:** Replace placeholder data in the dashboard components with live data from the Data Connect service.
- **Details:** Use the generated hooks from the `waflens-code/src/dataconnect-generated` directory to query and mutate data in your dashboard components (`src/components/dashboard/*`).

## 4. Expand Testing Coverage
To ensure the stability and reliability of the application, a robust testing suite is necessary.

- **Action:** Add unit and integration tests for new and existing features.
- **Details:** Focus on testing the AI API routes, authentication flows, and data-driven components.
