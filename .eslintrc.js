/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    "no-unused-vars": "warn",
    "vue/script-setup-uses-vars": "error",
    "no-var": "error",
    "prefer-const": "error",
    "object-shorthand": "error",
    "prefer-template": "error",
    "no-loop-func": "error",
    "default-param-last": "error",
    "no-param-reassign": "error",
    "prefer-spread": "error",
    "prefer-arrow-callback": "error",
    "no-duplicate-imports": "error",
    "dot-notation": "error",
    "no-unneeded-ternary": "error",
    "prefer-destructuring": "warn",
  },
};
