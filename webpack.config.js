const webpack = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");
const slsw = require("serverless-webpack");

module.exports = {
    entry: slsw.lib.entries,
    target: "node",
    mode: slsw.lib.webpack.isLocal ? "development" : "production",
    performance: {
        hints: false
    },
    stats: "minimal",
    devtool: "nosources-source-map",
    externals: [
        /aws-sdk/ // Available on AWS Lambda
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias :{
            '@src': path.resolve(__dirname,"src/")
        }
    },
    optimization: {
        minimize: false
    },
    output: {
        libraryTarget: "commonjs",
        path: path.join(__dirname, ".build"),
        filename: "[name].js",
        sourceMapFilename: "[file].map"
    },
    plugins: [
        new webpack.IgnorePlugin({
            resourceRegExp: /^pg-hstore$/
        }),
        new CopyPlugin({
            patterns: [
              { from: 'prisma/schema.prisma', to: 'src/schema.prisma' },
              { from: 'node_modules/.prisma/client/libquery_engine-rhel-openssl-1.0.x.so.node', to: 'src/libquery_engine-rhel-openssl-1.0.x.so.node' },
              { from: 'node_modules/.prisma/client/libquery_engine-darwin-arm64.dylib.node', to: 'src/libquery_engine-darwin-arm64.dylib.node' },
              { from: 'node_modules/.prisma/client/query_engine-windows.dll.node', to: 'src/query_engine-windows.dll.node' }
            ]
          })
      
    ]
};
