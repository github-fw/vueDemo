const path = require('path')
const webpack = require('webpack')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vueDemo/dist/' : '/',
  lintOnSave: true,
  //设置跨域代理
  devServer: {
    port: 3001,
    // proxy: {
     
    // }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        // JS: "JS",
      })
    ]
  },
  //链式调用修改webpack配置
  chainWebpack: config => {
    //设置alias
    config.resolve.alias
      .set('@$', resolve('src'))
  },
 
}
