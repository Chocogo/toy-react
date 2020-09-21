### 1、搭webpack
1-1、 npm i webpack webpack-cli -D
1-2、 新建webpack.config.js 进行配置

1-3、 安装babel-loader(识别), @babel/core（主要功能）, @babel/preset-env（默认配置)  -D
1-4、 babel-loader配置: 
  module: {
    rules: [{
      test: ,
      use: {
        loader: ,
        options: [
          presets: [],
          plugins: []
        ]
      }
    }]
  }
1-5 、安装@babel/plugin-transform-react-jsx, 指定babel的plugin配置，生成函数名字可以指定第二个参数
  plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]]
ps. 浏览器控制台source -> webpack能看到webpack打包后的代码