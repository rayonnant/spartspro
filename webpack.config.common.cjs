const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = (env) => {
	const isDev = env.mode === 'development'

	return {
		context: path.resolve(__dirname, 'src'),

		entry: './index.ts',

		output: {
			filename: '[name].[contenthash].js',
			path: path.resolve(__dirname, 'dist'),
			clean: true,
			publicPath: 'auto',
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: '!!html-loader!' + path.resolve(__dirname, 'public/index.html'),
			}),
			new MiniCssExtractPlugin()
		],

		module: {
			rules: [
				{
					test: /\.html$/i,
					loader: 'html-loader',
				},
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				},
				{
					test: /\.css$/i,
					use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: ['postcss-preset-env']
								}
							}
						},
						'sass-loader'
					],
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/resource',
					generator: {
						filename: 'assets/fonts/[name].[hash][ext][query]'
					}
				},
				{
					test: /\.(jp(e*)g|png|svg|gif|webp)$/i,
					type: 'asset/resource',
					generator: {
						filename: 'assets/images/[name].[hash][ext][query]'
					}
				},
			],
		}
	}
}
