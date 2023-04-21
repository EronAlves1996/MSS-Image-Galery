module.exports = {
  extends: [
    "next/core-web-vitals",
    "turbo",
    "prettier",
    "eslint:recommended",
    "plugin:relay/recommended",
  ],
  plugins: ["relay"],
};
