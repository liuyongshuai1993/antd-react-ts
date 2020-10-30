/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2020-10-30 09:59:47
 * @LastEditors: 刘永帅
 * @LastEditTime: 2020-10-30 10:50:04
 */
const path = require('path')
const CracoLessPlugin = require('craco-less')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
	webpack: {
		// 别名
		alias: {
			'@': path.resolve('src'),
		},
		plugins: [
		],
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						// 修改主题颜色
						modifyVars: { '@primary-color': '#722ed1' },
						javascriptEnabled: true,
					},
				},
			},
		},
	],
}
