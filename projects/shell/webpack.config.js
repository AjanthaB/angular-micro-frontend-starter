module.exports = {
    plugins: [
      new ModuleFederationPlugin({
        remotes: {
          Dashboard: 'Dashboard',
        }
      })
    ]
  }