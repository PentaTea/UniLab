//引入modules文件夹下所有组件
const modulesFiles = require.context("./modules", true, /\.vue$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  //拼接并编码前缀,解决vue读取组件名时报错
  modules["Cell_MODULES_" + moduleName] = value.default;
  return modules;
}, {});

export default modules;
