# CHANGELOG

## Initial Project State

-   **Date:** 2024-07-30
-   **Description:** Initial state of the project before any optimizations or dependency updates.
-   **Notes:** This entry serves as a baseline. All subsequent changes will be documented below this.

## Change 1: Updated Root Project Dependencies (Minor & Patch Versions)

-   **Date:** 2024-07-30
-   **Description:** Updated several root project dependencies to their latest minor or patch versions to improve security, performance, and stability. No major version updates were performed.
-   **Updated Packages:**
    -   `@genkit-ai/googleai`: from 1.19.1 to 1.19.2
    -   `@genkit-ai/next`: from 1.19.1 to 1.19.2
    -   `@radix-ui/react-accordion`: from 1.2.3 to 1.2.12
    -   `@radix-ui/react-alert-dialog`: from 1.1.6 to 1.1.15
    -   `@radix-ui/react-avatar`: from 1.1.3 to 1.1.10
    -   `@radix-ui/react-checkbox`: from 1.1.4 to 1.3.3
    -   `@radix-ui/react-collapsible`: from 1.1.11 to 1.1.12
    -   `@radix-ui/react-dialog`: from 1.1.6 to 1.1.15
    -   `@radix-ui/react-dropdown-menu`: from 2.1.6 to 2.1.16
    -   `@radix-ui/react-label`: from 2.1.2 to 2.1.7
    -   `@radix-ui/react-menubar`: from 1.1.6 to 1.1.16
    -   `@radix-ui/react-popover`: from 1.1.6 to 1.1.15
    -   `@radix-ui/react-progress`: from 1.1.2 to 1.1.7
    -   `@radix-ui/react-radio-group`: from 1.2.3 to 1.3.8
    -   `@radix-ui/react-scroll-area`: from 1.2.3 to 1.2.10
    -   `@radix-ui/react-select`: from 2.1.6 to 2.2.6
    -   `@radix-ui/react-separator`: from 1.1.2 to 1.1.7
    -   `@radix-ui/react-slider`: from 1.2.3 to 1.3.6
    -   `@radix-ui/react-switch`: from 1.1.3 to 1.2.6
    -   `@radix-ui/react-tabs`: from 1.1.3 to 1.1.13
    -   `@radix-ui/react-toast`: from 1.2.6 to 1.2.15
    -   `@radix-ui/react-tooltip`: from 1.1.8 to 1.2.8
    -   `dotenv`: from 16.5.0 to 16.6.1
    -   `genkit`: from 1.19.1 to 1.19.2
    -   `genkit-cli`: from 1.19.1 to 1.19.2
    -   `postcss`: from 8.5.2 to 8.5.6
    -   `react-hook-form`: from 7.54.2 to 7.62.0
    -   `tailwind-merge`: from 3.0.1 to 3.3.1
    -   `typescript`: from 5.7.3 to 5.9.2
-   **Rollback Plan:** Revert `package-lock.json` to the state prior to this change (via Git or manual replacement). Run `npm install` to reinstall previous versions.

## Interim Change: Updated Node.js Engine Version in Firebase Functions & Corrected package.json

-   **Date:** 2024-07-30
-   **Description:** Updated the `engines.node` field in `functions/package.json` from `"18"` to `"20"` to align with the current Node.js environment (`v20.19.1`). This also included correcting a JSON parsing error that occurred during a previous write operation to `functions/package.json`.
-   **Reasoning:** Resolves a compatibility issue that was preventing proper dependency management in the Firebase Functions directory. Aligning the declared Node.js version with the execution environment ensures correct package resolution and avoids potential build or runtime errors. The JSON correction ensures the file is valid.
-   **Rollback Plan:** Revert the `functions/package.json` file to its previous state (setting `"node": "18"` again) and run `npm install` within the `functions/` directory. If a more robust rollback is needed, revert the entire `functions/` directory via Git.

## Change 2: Updated Firebase Functions Dependencies (Major Versions for Critical Vulnerabilities & Peer Dependency Resolution)

-   **Date:** 2024-07-30
-   **Description:** Per user approval, `firebase-admin` and `firebase-functions` were updated to their latest major versions to resolve 4 critical security vulnerabilities. Additionally, `firebase-functions-test` was updated (or confirmed to be at its latest compatible version) to resolve peer dependency warnings.
-   **Updated Packages:**
    -   `firebase-admin`: from `^11.8.0` to `^13.5.0`
    -   `firebase-functions`: from `^4.3.1` to `^6.4.0`
    -   `firebase-functions-test`: from `^3.1.0` to `^3.4.1` (latest compatible version at the time of update)
-   **Notes:** This change involved major version bumps to address critical security issues. The `npm install` command reported `0 vulnerabilities` after these updates. Although `npm outdated` initially showed no minor/patch updates for `firebase-admin` and `firebase-functions` within their previous major versions, the update to the latest major versions resolved underlying critical vulnerabilities. `firebase-functions-test` was updated to ensure full compatibility and resolve peer dependency warnings.
-   **Rollback Plan:** Revert `functions/package.json` and `functions/package-lock.json` to the state prior to this change (via Git or manual replacement of version numbers) and run `npm install` within the `functions/` directory. If a more robust rollback is needed, revert the entire `functions/` directory via Git.

## Change 3: Remove Unused Dependency `dotenv` from Root Project

-   **Date:** 2024-07-30
-   **Description:** The `dotenv` package is likely unused by the application code. It is safe to remove because Next.js handles environment variables internally via `@next/env`. No direct `require('dotenv')` or `import dotenv from 'dotenv'` statements were found in `src/` or `functions/`.
-   **Action:** Execute `npm uninstall dotenv`.
-   **Rollback Plan:** If any issues arise after removal, re-add the dependency to the `package.json` file and run `npm install` to reinstall the package.
