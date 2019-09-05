module.exports = {
    mode: 'none',
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015','stage-0']
            },
            test: /\.js?$/,
            exclude: /node_modules/
        }]
    }
};