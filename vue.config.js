const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,//保存的時候驗認
  transpileDependencies: true,
  css: {
    // 给 sass-loader 传递选项
    loaderOptions: {
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: `@import "./src/styles/main.scss";`,
      },
    },
  },
});
