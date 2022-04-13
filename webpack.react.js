const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:{react:"./src/ReactHello.tsx"},
  mode:"development",
  module:{
    rules:[{
      test:/\.tsx?$/,
      use:"ts-loader",
      exclude:/node_modules/
    }]
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
    })
  ]
}