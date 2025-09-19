# CHANGELOG

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
