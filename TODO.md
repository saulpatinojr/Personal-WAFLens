
# TODO

- [ ] Add a database to store and retrieve data.
- [ ] Implement user authentication.
- [ ] Add more tests.

## AI Integration Findings

The application build was failing because the AI functionality, which uses the `@google/generative-ai` package, requires a server-side environment to run. This is incompatible with the static export configuration (`output: 'export'`) in `next.config.ts`.

To fix the build, the AI components and related server-side dependencies were removed.

To re-implement AI functionality, one of the following approaches should be taken:

1.  **Use Next.js API Routes (Recommended):** Create API routes in `src/app/api` to house the AI logic. The client-side components can then make API calls to these server-side endpoints.
2.  **Switch to SSR:** Remove `output: 'export'` from `next.config.ts` to run the application with a Node.js server, allowing the use of server components that can directly call the AI package.
