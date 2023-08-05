module.exports = {
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            library: { type: 'module' },
            filename: 'remoteEntry.js',
            exposes: {
              './DashboardModule': './src/app/dashboard.module.ts'
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