module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            library: { type: 'var', name: 'dashboard' },
            filename: 'remoteEntry.js',
            exposes: {
              './DashboardModule': './src/app/dashboard.module.ts'
            }
          })
    ]
}