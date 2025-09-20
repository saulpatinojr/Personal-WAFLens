# **App Name**: WAFLens

## Core Features:

- Project Scaffolding: Sets up the basic project structure including directories for the front-end (`src/`), static assets (`public/`), Firebase Functions (`functions/`), and CI/CD workflows (`.github/workflows/`).
- Configuration Files: Generates essential configuration files such as `package.json`, `tsconfig.json`, `.gitignore`, `firebase.json`, and `.firebaserc` to streamline project setup and deployment.
- Initial Code Setup: Provides initial code scaffolding with a basic `index.html`, a placeholder front-end component (e.g., `src/App.jsx` with "Hello, World!"), and a simple Firebase Function example in `functions/index.js` or `functions/index.ts`.
- CI/CD Pipeline: Implements a complete GitHub Actions workflow defined in `.github/workflows/main.yml` that automatically builds the front-end application, deploys it to Firebase Hosting, and deploys Firebase Functions on every push to the `main` branch.
- Security Rules Template: Adds a basic Firestore `firestore.rules` file that provides a template for securing data based on user authentication, including comments to explain environment variable setup.

## Style Guidelines:

- Primary color: Deep blue (#3F51B5), conveying trust and stability appropriate for a developer tool.
- Background color: Dark navy blue (#12182B), creating a modern and sophisticated interface.
- Accent color: Teal (#009688) and Pink (#E91E63), a contrasting but harmonious hue for interactive elements and status indicators (Approved/Declined).
- Body and headline font: 'Inter', a sans-serif font providing a clean, modern, neutral look, good for both headers and body, ensuring readability.
- Use clean, simple, and monolinear icons that reflect technical precision and clarity.  Icons should be white or light grey.
- Prioritize a clean and structured layout with a focus on code readability and ease of navigation through configuration files. Use a sidebar for primary navigation (e.g., 'Azure Lens', 'Files', 'AI Settings').
- Divide the main content area into sections for 'Reliability', 'Security', 'Cost Optimization', 'Operational Excellence', 'Performance Efficiency', 'Pillar Observance' (radar chart), 'Framework Adoption' (chart), and 'Action Items' (table).
- Use cards with rounded corners for individual metrics or resources. Action Items table to display Resource, Date, Amount, and Status in a structured manner.
- Incorporate subtle animations, such as fade-ins or transitions, to enhance user experience without distracting from the technical content.