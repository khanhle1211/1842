module.exports = {
  transpileDependencies: [],
  configureWebpack: (config) => {
    config.plugins = config.plugins.filter(
      (plugin) => plugin.constructor.name !== 'Progress'
    )
  }
}
