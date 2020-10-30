/*
 * @Descripttion:
 * @version:
 * @Author: 刘永帅
 * @Date: 2020-10-30 09:59:47
 * @LastEditors: 刘永帅
 * @LastEditTime: 2020-10-30 14:05:22
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
		plugins: [],
	},
	babel: {
		plugins: [
            // 用来支持装饰器
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            //按需加载后只需引入组件，无需再额外引入样式文件，
            //babel会自动按需帮你完成样式的引入。这样打包出来的文件会更小。
			[
				'import',
				{
                    
					libraryName: 'antd',
					libraryDirectory: 'es',
					style: true, //设置为true即是less
				},
			],
		],
	},
	//配置代理解决跨域
	devServer: {
		proxy: {
			'/api': {
				target: 'http://baidu.com',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
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
