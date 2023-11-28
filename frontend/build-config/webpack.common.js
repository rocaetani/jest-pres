const path = require("path")

module.exports = {
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        modules: [path.resolve(__dirname, "../src"), "node_modules"]
    },
    output: {
        publicPath: "/",
    },
    entry: "./src/main.jsx",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    // If babel configuration explodes, consider extracting to .babelrc
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}
