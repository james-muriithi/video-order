module.exports = {
    "root": true,
    "env": {
      "node": true
    },
    "plugins": [
      "import",
      "vue"
    ],
    "settings": {
      "import/extensions": [
        "never"
      ]
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended",
      "airbnb-base",
      "prettier"
    ],
    "parserOptions": {
      "parser": "@babel/eslint-parser",
      "sourceType": "module"
    },
    "rules": {
      "import/no-unresolved": "off",
      "vue/order-in-components": "off",
      "vue/require-default-prop": "off",
      "vue/no-v-html": "off",
      "vue/no-template-shadow": "off",
      "vue/this-in-template": "off",
      "import/prefer-default-export": "off",
      "no-param-reassign": "off",
      "import/extensions": "off",
      "vue/multi-word-component-names": "off"
    }
};