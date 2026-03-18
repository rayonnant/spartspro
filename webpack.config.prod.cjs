const {merge} = require('webpack-merge')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const commonConfig = require('./webpack.config.common.cjs')

module.exports = (env) => {
	return merge(commonConfig({ mode: 'production' }), {
		mode: 'production',
		devtool: 'source-map',
		optimization: {
			minimizer: [`...`, new CssMinimizerPlugin()]
		}
	})
}
