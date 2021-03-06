module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-console": [
      "error",
      {
        allow: ["error"]
      }
    ]
  },
  env: {
    node: true,
    es6: true
  }
};
