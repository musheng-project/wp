let path = require("path");

let miniCssExtractPlugin = require("mini-css-extract-plugin");

// 暴露配置文件
module.exports = {
    // 配置模式
    // development: 开发模式
    // production: 生产模式
    mode: "development",

    // 配置入口
    entry: {
        app: "./app/app.js"
    },

    // 配置输出文件路径
    output: {
        // 打包输出的文件路径
        path: path.resolve(__dirname + "/build"),

        filename: "[name].min.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // {loader: "style-loader"},

                    {loader: miniCssExtractPlugin.loader},
                    {loader: "css-loader"}
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // {loader: "style-loader"},

                    {loader: miniCssExtractPlugin.loader},
                    {loader: "css-loader"},
                    {loader: "less-loader"}
                ]
            }
        ]
    },

    plugins: [
        new miniCssExtractPlugin({
            filename: "[name].min.css"
        })
    ]
}