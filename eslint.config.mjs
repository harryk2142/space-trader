// @ts-check

// import html from "@html-eslint/eslint-plugin";

import eslintJs from "@eslint/js";
// import stylistic from "@stylistic/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

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

export default typescriptEslint.config(
    eslintJs.configs.recommended,
    typescriptEslint.configs.recommended,
    typescriptEslint.configs.stylistic,
    globalConfig,
    {
        ignores: ["dist/**", "public/**", "node_modules/**"]
    },
    {
        plugins: {
            perfectionist
        },
        rules: {
            // "@typescript-eslint/no-unused-vars": "off",
            // "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            // "react-hooks/exhaustive-deps": "off",
            // "@typescript-eslint/no-redeclare": "off",
            // "no-labels": "off",

            "prefer-const": "error",
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
            "@typescript-eslint/consistent-type-imports": [
                "error",
                {
                    prefer: "type-imports",
                    disallowTypeAnnotations: false
                }
            ],
            "perfectionist/sort-imports": [
                "error",
                {
                    type: "natural",
                    order: "asc",
                    customGroups: [
                        {
                            groupName: "assets",
                            elementNamePattern: "^.+assets"
                        },
                        {
                            groupName: "virtual",
                            elementNamePattern: "^\\u0000"
                        }
                    ],
                    groups: [
                        "builtin",
                        "side-effect",
                        "external",
                        "internal",
                        "index",
                        "sibling",
                        "parent",
                        "style",
                        "assets",
                        "virtual",
                        "unknown"
                    ]
                }
            ],
            "perfectionist/sort-jsx-props": [
                "error",
                {
                    type: "alphabetical",
                    order: "asc",
                    fallbackSort: { type: "unsorted" },
                    ignoreCase: true,
                    specialCharacters: "keep",
                    ignorePattern: [],
                    partitionByNewLine: false,
                    newlinesBetween: "ignore",
                    useConfigurationIf: {},
                    groups: [],
                    customGroups: {}
                }
            ]
        }

    }
    // stylistic.configs.customize({
    //     // the following options are the default values
    //     indent: 4,
    //     quotes: "double",
    //     semi: true,
    //     jsx: true,
    //     // ...
    // }),
    // {
    //     files: ["**/*.html"],
    //     plugins: {
    //         html,
    //     },
    //     language: "html/html",
    //     rules: {
    //         "html/no-duplicate-class": "error",
    //     },
    // },
);
