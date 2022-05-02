const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Video Order";
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/partials/_variables.scss"; @import "@/assets/scss/partials/_colors.scss"; @import "@/assets/scss/partials/_mixins.scss";`,
        sourceMap: true,
      },
    },
  },
})
