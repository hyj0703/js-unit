const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  entry:{react:"./src/main.ts"},
  mode:"development",
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        loader:"ts-loader",
        options:{
          "appendTsSuffixTo":[/\.vue$/]
        },
        exclude:/node_modules/
      },
      {
        test:/\.vue$/,
        loader:"vue-loader"
      }
    ]
  },
  resolve:{
    extensions:['.ts','.tsx','.js']
  },
  output:{filename:"bandle.[name].js",path:path.resolve(__dirname,'dist')},
  devServer:{
    static:path.resolve(__dirname,'dist'),
    port:3020,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'./src/template.html')
    }),
    new VueLoaderPlugin()
  ]
}