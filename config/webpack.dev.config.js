const base = require('./webpack.config')

module.exports = Object.assign({},base,{
    mode: "development", 
    devtool: "inline-source-map",
})