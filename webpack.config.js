const webpack = require("webpack");
const path = require("path");

module.exports = function (env, argv) {
    return {

        mode: env && env.production ? 'production' : 'development',
        devtool: env && env.production ? 'source-maps' : 'eval',
        context: __dirname + "/src",
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            watchContentBase: true,
            compress: true,
            lazy: false,
            open: true,
            overlay: true,
            port: 9000,
        },
        entry: {
            app: "./app.js",
        },
        output: {
            path: __dirname + "/dist",
            filename: "[name].bundle.js",
        },
        module: {
            rules: [{
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
                    loader: "file-loader",
                    options: {
                        name: "index.html",
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                }
            ],
        },

    };
};