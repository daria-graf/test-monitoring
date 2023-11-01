module.exports = {
    root: true,
    plugins: ['mocha'],
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:mocha/recommended'
    ],
    rules: {
        indent: ['error', 2],
        semi: ['error', 'always'],
        quotes: ['error', 'single', {avoidEscape: true}],
        eqeqeq: ['error', 'always'],
        curly: 'error',
        'brace-style': 'error',
        'keyword-spacing': ['error', {before: true}],
        'space-before-function-paren': ['error', 'never'],
        'padding-line-between-statements': [
            'error',
            {blankLine: 'always', prev: '*', next: 'function'}
            {blankLine: 'always', prev: 'function', next: '*'}
        ],
        'mocha/no-skipped-tests': 'error',
        'mocha/no-exclusive-test': 'error',
        'mocha/no-mocha-arrows': 'off'

    },
    parseOptions: {
        ecmaVersion: 'latest'
    },
    env: {
        node: true,
        es6: true
    }
}