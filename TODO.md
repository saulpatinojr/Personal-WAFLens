# Project To-Do List

This document tracks the tasks to be completed for the project.

## Optimization

Optimization focuses on improving performance, efficiency, and cost.

- [ ] **Analyze Firestore Queries:** Analyze the Firestore database queries in the application and suggest refactoring to reduce read operations and improve performance. Provide specific code examples.
- [ ] **Optimize Cloud Function:** Review the `[specific-function-name]` in Cloud Functions for Firebase and optimize it for lower execution time and reduced memory usage. Identify any unnecessary loops or redundant logic.
- [ ] **Restructure Realtime Database:** Examine the Realtime Database structure and recommend changes to minimize data fetching and improve data synchronization. Suggest a new data schema that is more efficient for user profiles and their associated posts.
- [ ] **Implement Code Splitting:** Review the client-side code, specifically `[file-path-to-code]`, and identify opportunities for code splitting and lazy loading to reduce the initial page load time.

## Repair

Repair prompts are for fixing bugs, errors, or unexpected behavior.

- [ ] **Fix Error:** I am getting a `[error-type]` error in the `[file-name]` file. The error message is `[copy-and-paste-error-message]`. Please identify the root cause and provide a fix.
- [ ] **Fix Authentication Flow:** The user authentication flow is broken. After a user signs up, they are not redirected to the dashboard. The code for this is in `[file-path]`. Find and correct the issue.
- [ ] **Fix Profile Picture Display:** A user's profile picture is not displaying correctly after they upload it. The relevant code is in `[file-path]`. Debug the function and fix the issue so the image renders properly on the profile page.
- [ ] **Fix App Crash on Post Deletion:** The app crashes when a user tries to delete a post. Review the `deletePost` function in `[file-path]` and add robust error handling to prevent the crash.

## Maintenance

Maintenance prompts are for routine tasks, refactoring, and adding new features.

- [ ] **Add "Like" Feature:** Add a new feature that allows users to 'like' a post. This requires a new `likes` collection in Firestore, a new function to update the count, and UI changes to display the like button and count on each post component.
- [ ] **Refactor to React Hooks:** Refactor the `[specific-component-name]` to use React Hooks instead of class components. Ensure that the new code is clean, readable, and follows modern best practices.
- [ ] **Update Dependencies:** Update all of the project's dependencies to their latest versions. After the update, check for any breaking changes and modify the code as needed to ensure the app functions correctly.
- [ ] **Implement Security Rules:** Create and implement Firebase Security Rules for the `users` and `posts` collections in Firestore. The rules should ensure that a user can only read and write their own data, and that all public posts are readable by anyone.
