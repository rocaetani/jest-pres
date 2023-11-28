const HtmlWebpackPlugin = require("html-webpack-plugin")

const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")


const devConfig = {
    mode: "development",
    devServer: {
        port: 3003,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],

}

module.exports = merge(commonConfig, devConfig)
