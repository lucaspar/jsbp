const webpack = require("webpack");

module.exports = {

    mode: "production",            // 'production'
    context: __dirname + "/src",
    entry: { app: "./app.js", },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /^node_modules$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    },
                }],
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            }
        ],
    },

};
