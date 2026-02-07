import pluginJs from "@eslint/js";
import globals from "globals"; // 追加

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      // Node.jsとJestのグローバル変数を有効にする
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
];