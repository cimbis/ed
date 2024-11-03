/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'vuetify',
        '@vue/eslint-config-typescript',
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        indent: ['error', 4],
    },
}
