# CHANGELOG

## Change 6: Upgraded ESLint to v9 and Refactored Configuration
-   **Date:** 2024-09-20
-   **Description:** Upgraded ESLint to version 9 in the `functions` directory to align with modern JavaScript standards and improve code quality enforcement. This involved a significant refactoring of the ESLint configuration from the legacy `.eslintrc.js` format to the new flat `eslint.config.js` file.
-   **Key Steps:**
    -   Updated all `devDependencies` in `functions/package.json` to their latest versions to support ESLint v9.
    -   Created a new `eslint.config.js` with a modern, flat configuration structure.
    -   Resolved multiple dependency and configuration issues that arose during the upgrade, including module resolution errors and incorrect file path targeting.
    -   Performed a clean installation of `node_modules` to ensure a stable dependency tree.
-   **Notes:** This upgrade modernizes the linting process, improves maintainability, and ensures the project follows the latest best practices for code quality.

## Change 5: Fixed React Hydration Mismatch Error
-   **Date:** 2024-09-20
-   **Description:** Fixed a React hydration mismatch error on the main page. The error was caused by the `PillarObservanceChart` component, which was generating random IDs on the server and client, leading to a mismatch. The fix involved dynamically importing the component with SSR disabled in `src/app/page.tsx`, ensuring it only renders on the client-side.
-   **Notes:** This resolves the error and ensures a smooth user experience.

## Initial Project State

-   **Date:** 2024-07-30
-   **Description:** Initial state of the project before any optimizations or dependency updates.
-   **Notes:** This entry serves as a baseline. All subsequent changes will be documented below this.

## Change 1: Updated Root Project Dependencies (Minor & Patch Versions)
-   **Date:** 2024-09-18
-   **Description:** Performed a comprehensive update of all root-level project dependencies to their latest minor and patch versions. This addresses potential security vulnerabilities, improves stability, and ensures compatibility with the latest development tools.
-   **Notes:** This was a foundational step to modernize the project's dependency tree before introducing new features.

## Change 2: Updated Firebase Functions Dependencies (Major Versions for Critical Vulnerabilities & Peer Dependency Resolution)
-   **Date:** 2024-09-18
-   **Description:** Executed a major version update of dependencies within the `functions` directory. This was critical for resolving known security vulnerabilities and fixing peer dependency conflicts that were causing build warnings.
-   **Notes:** This change significantly improves the security posture and reliability of the project's backend services.

## Change 3: Initialized and Configured Firebase Data Connect
-   **Date:** 2024-09-19
-   **Description:** Ran `firebase init dataconnect` to integrate a GraphQL-based data layer. This involved creating and refining the GraphQL schema (`dataconnect/schema/schema.gql`) and generating the corresponding TypeScript SDK for the frontend.
-   **Key Steps:**
    -   Defined the core data models for resources, WAF controls, and subscriptions.
    -   Corrected schema validation errors by:
        -   Replacing the unsupported `JSON` type with `String`.
        -   Renaming the reserved `Subscription` type to `AppSubscription`.
        -   Converting all type names to `PascalCase` to adhere to Data Connect's naming conventions (e.g., `WAF_Pillar` to `WAFPillar`).
    -   Removed default example queries and mutations that were incompatible with our custom schema.
    -   Successfully generated the Data Connect SDK, which provides React hooks for seamless data interaction.
-   **Notes:** This establishes the complete, type-safe data layer for the application, paving the way for frontend development.

## Change 4: Dashboard Enhancements & Performance Fixes
-   **Date:** 2024-09-19
-   **Description:** Implemented key frontend improvements to resolve a critical performance issue and enhance the dashboard's data visualization capabilities.
-   **Key Steps:**
    -   **Performance Fix:** Resolved a 22-second page load delay by adding an inline SVG favicon to the main layout (`src/app/layout.tsx`). This prevents the browser from making a long, unsuccessful request for a non-existent `favicon.ico` file.
    -   **New Chart:** Introduced a new "Framework Adoption" chart to the main dashboard.
    -   **Layout Adjustment:** Updated the dashboard layout to display the "Pillar Observance" and "Framework Adoption" charts side-by-side, each taking up half the width of their container.
    -   **Component Creation:** Created a reusable chart component (`src/components/dashboard/framework-adoption-chart.tsx`) with placeholder data, which can be easily updated later with real application logic.
-   **Notes:** These changes significantly improve the user experience by eliminating a major performance bottleneck and enriching the dashboard with more detailed visualizations.
