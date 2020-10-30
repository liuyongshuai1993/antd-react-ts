/*
 * @Descripttion: 
 * @version: 
 * @Author: 刘永帅
 * @Date: 2020-10-30 09:59:47
 * @LastEditors: 刘永帅
 * @LastEditTime: 2020-10-30 10:09:45
 */
const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
          lessLoaderOptions: {
            lessOptions: { // 修改主题颜色
              modifyVars: { '@primary-color': '#722ed1' },
              javascriptEnabled: true,
            },
          },
        },
      },
    ],
  };