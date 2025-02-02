import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { 
      globals: { 
        ...globals.browser, 
        module: "readonly", 
        require: "readonly", 
        describe: "readonly", 
        it: "readonly", 
        beforeEach: "readonly", 
        afterEach: "readonly" 
      },
      ecmaVersion: "latest"
    },
  }
];

