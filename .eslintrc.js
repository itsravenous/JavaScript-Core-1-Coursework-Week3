module.exports = {
  env: {
    node: true,
    es2021: true,
    "jest/globals": true,
  },
  plugins: ["jest"],
  extends: ["@codeyourfuture/standard", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
