import globals from "globals";
import tseslint from "typescript-eslint";
import pluginImport from "eslint-plugin-import";

export default [
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "import": pluginImport,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "quotes": ["error", "double"],
    },
  },
];
