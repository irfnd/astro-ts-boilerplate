/** @type {import("prettier").Config} */

module.exports = {
	endOfLine: 'lf',
	jsxSingleQuote: false,
	printWidth: 120,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: true,
	pluginSearchDirs: [__dirname],
	plugins: [require.resolve('prettier-plugin-astro')],
	overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
