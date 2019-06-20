// vue.config.js
module.exports = {
  baseUrl: process.env.NODE_ENV === "production" ? "/vuehost/" : "/",
  outputDir: "docs",
  devServer: {
    port: 6420
  }
};
