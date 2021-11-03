//引入所有组件
const modulesFiles = require.context("./", true, /index\.[t|j]s$/);
console.log(modulesFiles.keys());

const modules = modulesFiles
  .keys()
  .filter((e) => /\.\/\w+\/index\.ts/.test(e))
  .reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(\w+)\/.*/, "$1");
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
  }, {});

export default {
  install(Vue) {
    Object.entries(modules).forEach(
      ([k, v]) => (console.log(k, v), Vue.component(k, v))
    );
  },
};
