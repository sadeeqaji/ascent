const env = process.env.NODE_ENV

const environments = {
     dev: require("./env/dev.env.json"),
}


module.exports = environments[env] || environments["prod"]