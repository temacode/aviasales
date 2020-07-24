module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true,
	},
	'extends': [
		'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            { "property": "freeze", "object": "Object" },
            { "property": "myFavoriteWrapper" },
        ],
        "linkComponents": [
            // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            { "name": "Link", "linkAttribute": "to" },
        ],
        'import/resolver': {
            'node': {
                moduleDirectory: ['node_modules', 'src/'],
            }
        },
    },
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'max-len': [
			'error',
			{
				code: 120,
			}
		],
		'indent': [
			'error',
			4,
			{
                SwitchCase: 1
			}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
        ],
        'react/prop-types': [
            'error',
            {
				skipUndeclared: true
			}
        ],
        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: false,
                ignoreComments: false,
            }
		],
		'object-curly-spacing': [
			'error',
			'always',
		],
		'react/jsx-curly-spacing': [
			'error',
			{
				'when': 'always',
				'spacing': {
					'objectLiterals': 'never',
				}
			}
		],
		'react/jsx-max-props-per-line': [
			'error',
			{
				when: 'always',
			}
		],
		'react/jsx-indent': [
			'error',
			4,
			{
				indentLogicalExpressions: true,
			}
		],
		'react/jsx-indent-props': [
			'error',
            4
		],
		'react/jsx-max-props-per-line': [
			'error',
			{
				maximum: 1,
                when: 'multiline',
			}
		],
		'react/jsx-closing-tag-location': [
			'error',
			'always',
		],
		'react/jsx-sort-props': [
			'error',
			{
				shorthandFirst: true,
                callbacksLast: true,
                noSortAlphabetically: true,
			}
        ],
        'react/jsx-wrap-multilines': [
            'error',
            {
                "declaration": "ignore",
                "assignment": "ignore",
                "return": "parens",
                "arrow": "ignore",
                "condition": "ignore",
                "logical": "ignore",
                "prop": "ignore",
            }
        ],
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true,
			}
		],
		'array-bracket-spacing': [
			'error',
			'always',
		],
		'comma-dangle': [
			'error',
			'always-multiline',
        ]
	}
};