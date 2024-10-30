import nodePlugin from "eslint-plugin-n";
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import js from '@eslint/js';

export default [
    js.configs.recommended,

    {
        plugins: {
            'n': nodePlugin,
            'import': importPlugin,
            'promise': promisePlugin,
        },

        rules: {
            "indent": ["error", 4],

            // revised rules from "standard"
            "no-var": "warn",
            "object-shorthand": [
                "warn",
                "properties"
            ],
            "accessor-pairs": [
                "error",
                {
                    "setWithoutGet": true,
                    "enforceForClassMembers": true
                }
            ],
            "array-callback-return": [
                "error",
                {
                    "allowImplicit": false,
                    "checkForEach": false
                }
            ],
            "camelcase": [
                "error",
                {
                    "allow": [
                        "^UNSAFE_"
                    ],
                    "properties": "never",
                    "ignoreGlobals": true
                }
            ],
            "curly": [
                "error",
                "multi-line"
            ],
            "default-case-last": "error",
            "dot-notation": [
                "error",
                {
                    "allowKeywords": true
                }
            ],
            "eqeqeq": [
                "error",
                "always",
                {
                    "null": "ignore"
                }
            ],
            "new-cap": [
                "error",
                {
                    "newIsCap": true,
                    "capIsNew": false,
                    "properties": true
                }
            ],
            "no-array-constructor": "error",
            "no-caller": "error",
            "no-constant-condition": ["error", { "checkLoops": false }],
            "no-duplicate-imports": "error",
            "no-empty": ["error", { "allowEmptyCatch": true }],
            "no-eval": "error",
            "no-extend-native": "error",
            "no-extra-bind": "error",
            "no-implied-eval": "error",
            "no-inner-declarations": "error",
            "no-iterator": "error",
            "no-label-var": "error",
            "no-labels": [
                "error",
                {
                    "allowLoop": false,
                    "allowSwitch": false
                }
            ],
            "no-lone-blocks": "error",
            "no-mixed-operators": [
                "error",
                {
                    "groups": [
                        [
                            "==",
                            "!=",
                            "===",
                            "!==",
                            ">",
                            ">=",
                            "<",
                            "<="
                        ],
                        [
                            "&&",
                            "||"
                        ],
                        [
                            "in",
                            "instanceof"
                        ]
                    ],
                    "allowSamePrecedence": true
                }
            ],
            "no-multi-str": "error",
            "no-new": "error",
            "no-new-func": "error",
            "no-new-object": "error",
            "no-new-symbol": "error",
            "no-new-wrappers": "error",
            "no-octal-escape": "error",
            "no-proto": "error",
            "no-return-assign": [
                "error",
                "except-parens"
            ],
            "no-self-compare": "error",
            "no-sequences": "error",
            "no-tabs": "error",
            "no-template-curly-in-string": "error",
            "no-throw-literal": "error",
            "no-undef-init": "error",
            "no-unmodified-loop-condition": "error",
            "no-unneeded-ternary": [
                "error",
                {
                    "defaultAssignment": false
                }
            ],
            "no-unreachable-loop": "error",
            "no-unused-vars": ["error", {
                "args": "none",
                "caughtErrors": "none",
                "ignoreRestSiblings": true,
                "vars": "all"
            }],
            "no-unused-expressions": [
                "error",
                {
                    "allowShortCircuit": true,
                    "allowTernary": true,
                    "allowTaggedTemplates": true
                }
            ],
            "no-use-before-define": [
                "error",
                {
                    "functions": false,
                    "classes": false,
                    "variables": false
                }
            ],
            "no-useless-call": "error",
            "no-useless-computed-key": "error",
            "no-useless-constructor": "error",
            "no-useless-rename": "error",
            "no-useless-return": "error",
            "no-void": "error",
            "one-var": [
                "error",
                {
                    "initialized": "never"
                }
            ],
            "prefer-const": [
                "error",
                {
                    "destructuring": "all"
                }
            ],
            "prefer-promise-reject-errors": "error",
            "prefer-regex-literals": [
                "error",
                {
                    "disallowRedundantWrapping": true
                }
            ],
            "quote-props": [
                "error",
                "as-needed"
            ],
            "spaced-comment": [
                "error",
                "always",
                {
                    "line": {
                        "markers": [
                            "*package",
                            "!",
                            "/",
                            ",",
                            "="
                        ]
                    },
                    "block": {
                        "balanced": true,
                        "markers": [
                            "*package",
                            "!",
                            ",",
                            ":",
                            "::",
                            "flow-include"
                        ],
                        "exceptions": [
                            "*"
                        ]
                    }
                }
            ],
            "symbol-description": "error",
            "unicode-bom": [
                "error",
                "never"
            ],
            "yoda": [
                "error",
                "never"
            ],

            // plugin configs
            "import/export": "error",
            "import/first": "error",
            "import/no-absolute-path": ["error", { "esmodule": true, "commonjs": true, "amd": false }],
            "import/no-duplicates": "error",
            "import/no-named-default": "error",
            "import/no-webpack-loader-syntax": "error",

            "n/handle-callback-err": ["error", "^(err|error)$" ],
            "n/no-callback-literal": "error",
            "n/no-deprecated-api": "error",
            "n/no-exports-assign": "error",
            "n/no-new-require": "error",
            "n/no-path-concat": "error",
            "n/process-exit-as-throw": "error",

            "promise/param-names": "error",
        }
    }
];
