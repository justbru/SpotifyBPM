module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "2017",
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:react/recommended",
    ],
    "plugins": ["react", "import"],
    "rules": {
    }
}
