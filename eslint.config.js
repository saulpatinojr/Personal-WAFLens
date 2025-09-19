// @ts-check

const globals = require('globals');
const nextPlugin = require('@next/eslint-plugin-next');
const reactPlugin = require('eslint-plugin-react');
const hooksPlugin = require('eslint-plugin-react-hooks');
const typescriptParser = require('@typescript-eslint/parser');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 * This is the new "flat" ESLint configuration file.
 * We are building it from the ground up to have full control and avoid legacy compatibility issues.
 */
module.exports = [
  // 1. Global ignores
  // These files will be ignored by ESLint. It's good practice to ignore build output and dependencies.
  {
    ignores: ["src/dataconnect-generated/**", ".next/**", "node_modules/**"],
  },

  // 2. Main configuration for TypeScript/React files
  // This is the core of our linting setup.
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      '@next/next': nextPlugin,
      'react': reactPlugin,
      'react-hooks': hooksPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    },
    settings: {
      react: {
        // Automatically detect the React version to use.
        version: 'detect',
      }
    },
    rules: {
      // Start with the recommended rules for each plugin.
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,

      // --- Custom rule adjustments ---

      // Warn about unused variables instead of erroring.
      "@typescript-eslint/no-unused-vars": "warn",
      
      // With the new JSX transform in React 17+, 'React' is no longer needed in scope.
      "react/react-in-jsx-scope": "off",

      // PropTypes are redundant in a TypeScript project.
      "react/prop-types": "off",
    }
  },

  // 3. Configuration override for specific files
  {
    files: ["tailwind.config.ts"],
    rules: {
      // Tailwind CSS config files often use require().
      "@typescript-eslint/no-require-imports": "off",
    }
  },
  {
    files: ["next-env.d.ts"],
    rules: {
        // This is an auto-generated file that uses a triple-slash reference.
        "@typescript-eslint/triple-slash-reference": "off"
    }
  }
];