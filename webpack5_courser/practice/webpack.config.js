const path = require("path"); // nodejs核心模块, 专门用来处理路径问题

module.exports = {
  entry: "./src/main.js", //相对路径
  output: {
    //__dirname是当前文件夹的路径
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  module: {
    rules: [
      //loader的配置
      {
        test: /\.css$/i, // 只检测.css文件
        //
        use: [
          "style-loader", // 将js中css通过创建style标签添加html文件中生效
          "css-loader", // 将css资源编译成commonjs的模块到js中
        ], //执行顺序是从右(下)到左(上)(先执行css-loader)
      },
      {
        test: /\.less$/i, // 只检测.css文件
        //
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/i, // 只检测.css文件
        //
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        type: "asset",
        parser: {
          // 小于10kb的图片转base64
          // 减少请求数量,但体积会更大
          maxSize: 10 * 1024,
        },
        generator: {
          filename: "static/images/[hash][ext][query]",
        },
      },
    ],
  },

  plugins: [
    //plugin的配置
  ],
  mode: "development",
};
