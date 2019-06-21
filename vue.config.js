// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vuehost/" : "/vuehost/",
  outputDir: "docs",
  devServer: {
    port: 6420
  }
};
