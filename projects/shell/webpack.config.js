const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      library: {type: 'module'},
      remotes: {
        "dashboard": "http://localhost:3000/remoteEntry.js",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      }
    })
  ]
}