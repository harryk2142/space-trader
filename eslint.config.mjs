// @ts-check

import eslint from "@eslint/js";
import html from "@html-eslint/eslint-plugin";

import tseslint from "typescript-eslint";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";

const globalConfig = {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },
};

// const typescriptConfig = eslint.config({
//     files: ["**/*.ts", "**/*.tsx"],
//     languageOptions: {
//         parser: eslint.parser,
//         parserOptions: {
//             project: "./tsconfig.json",
//             ecmaVersion: "latest",
//             sourceType: "module",
//             ecmaFeatures: {jsx: true},
//         },
//     },
//     rules: {
//         quotes: ["error", "double"],
//     },
// });

// const preactConfig = {
//     files: ["**/*.tsx"],
//     ...preact.configs.base,
// };
// const preactConfig = [preact.configs.base, ...preact.configs.recommended];

// export default [
// globalConfig,
// ...typescriptConfig,
// ...preact.configs.recommended,

// javascriptConfig,
// preact,
// ];

export default tseslint.config(
    globalConfig,
    // eslint.configs.recommended,
    tseslint.configs.recommended,
    stylistic.configs.customize({
        // the following options are the default values
        indent: 4,
        quotes: "double",
        semi: true,
        jsx: true,
        // ...
    }),
    {
        files: ["**/*.html"],
        plugins: {
            html,
        },
        language: "html/html",
        rules: {
            "html/no-duplicate-class": "error",
        },
    },
);
