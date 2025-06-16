// @ts-check

// import html from "@html-eslint/eslint-plugin";

import eslintJs from "@eslint/js";
// import stylistic from "@stylistic/eslint-plugin";
import perfectionist from "eslint-plugin-perfectionist";
import simpleImportSort from "eslint-plugin-simple-import-sort";
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
            "simple-import-sort": simpleImportSort,
            perfectionist
        },
        rules: {
            // "@typescript-eslint/no-unused-vars": "off",
            // "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            // "react-hooks/exhaustive-deps": "off",
            // "@typescript-eslint/no-redeclare": "off",
            // "no-labels": "off",
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        // Node.js built-ins
                        ["^node:.*", "^(fs|path|crypto|os)$"],
                        // Externe Abhängigkeiten
                        ["^react", "^@?\\w"],
                        // Interne Imports
                        ["^@/"],
                        // Relativ zugehörige Importe („./“)
                        ["^\\."],
                        // Alias Import (z.B. ~styles/main.scss wenn ~ für src/ steht)
                        ["^~"],
                        // Sortiert alle relativen Importe aus übergeordneten Ordnern (../). Die Regex sorgt dafür, dass z. B. import from "../utils"; nicht mit import from "./file"; vermischt wird.
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                        // Sortiert relative Importe (./file oder ./subdir/file) gesondert. Trägt zur besseren Lesbarkeit bei, indem es sicherstellt, dass lokale Dateien unterhalb des aktuellen Ordners in einer eigenen Gruppe bleiben.
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                        // Sorgt dafür, dass CSS- und SCSS-Dateien immer zuletzt importiert werden. Wird oft in React-Projekten genutzt, um Styling-Importe sauber zu halten.
                        ["^.+\\.s?css$"],
                        // Assets
                        ["^.+assets"],
                        // Sortiert spezielle Importe, die intern von Bundlern wie Vite oder Rollup benutzt werden (z. B. Virtual Modules oder import.meta-basierte Importe). \u0000 ist das Null-Zeichen und wird verwendet, um virtuelle Module zu markieren.
                        ["^\\u0000"]
                    ]
                }
            ],
            "simple-import-sort/exports": "error",
            "prefer-const": "error",
            "@typescript-eslint/consistent-type-definitions": ["error", "type"],
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
