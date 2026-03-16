const { merge } = require('webpack-merge')
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const commonConfig = require('./webpack.config.common.cjs')

module.exports = (env) => {
	return merge(commonConfig({ mode: 'development' }), {
		mode: 'development',
		devtool: 'inline-source-map',
		devServer: {
			port: 9000,
			hot: true,
			open: true,
			static: {
				directory: path.resolve(__dirname, 'public'),
				publicPath: '/'
			}
		},
		plugins: [
			new ESLintPlugin({
				extensions: ['js', 'jsx']
			})
		]
	})
}
