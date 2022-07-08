module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "plugin:vue/essential",
      "plugin:vue/vue3-recommended",
      "@vue/typescript/recommended",

    ],
    parserOptions: {
      ecmaVersion: 2020,
    },
  
    rules: {
      "vue/no-v-model-argument": "off",
      "vue/multi-word-component-names": "off",
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      noImplicitAny: "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "vue/valid-v-slot": [
        "error",
        {
          allowModifiers: false,
        },
      ],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "never",
            normal: "always",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
    },
    overrides: [
      {
        files: ["*.vue"],
        rules: {
          "no-undef": "off",
        },
      },
      {
        files: [
          "**/__tests__/*.{j,t}s?(x)",
          "**/tests/unit/**/*.spec.{j,t}s?(x)",
        ],
        env: {
          jest: true,
        },
      },
      {
        files: [
          "**/__tests__/*.{j,t}s?(x)",
          "**/tests/unit/**/*.spec.{j,t}s?(x)",
        ],
        env: {
          jest: true,
        },
      },
      {
        files: [
          "**/__tests__/*.{j,t}s?(x)",
          "**/tests/unit/**/*.spec.{j,t}s?(x)",
        ],
        env: {
          jest: true,
        },
      },
    ],
  };