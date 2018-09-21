module.exports = {
    mode: 'development',
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.txt$/,
            use: [
                {loader: 'raw-loader'}
            ]
        }]
    }
}
