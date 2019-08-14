module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    globals: {
        _: true,
        api: true,
        log: true
    },
    rules: {
        'indent': ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-parsing-error': [4, { 'x-invalid-end-tag': false }],
        'vue/no-use-v-if-with-v-for': 'off',
        'vue/no-unused-components': 'off',
        'eqeqeq': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
