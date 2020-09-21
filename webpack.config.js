module.exports = {
  entry: { // 入口打包后名字和和入口路径
    main: './main.js'
  },
  mode: 'development',
  optimization: {
    minimize: false
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: { // 选项
          presets: ['@babel/preset-env'],
          plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]]
        } 
      }
    }]
  }
}