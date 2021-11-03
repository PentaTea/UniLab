# 快速上手

本组件库：
- 为保留扩展性与源码可读性，未使用 rollup 等压缩代码，请按需安装依赖
- 源码依赖 ts, 使用类语法编写
- 外部使用时可以用原生 vue 语法
- 因原生 vue 使用 mixin 和 inject 比较麻烦，组件内部自定义扩展建议用类语法

## 安装必要依赖（若已有请忽略）

- 引入 lodash

   ```bash
   yarn add lodash
   ```

- 引入 typescript

   ```bash
   yarn add typescript ts-loader@8.2.0 -D
   ```

- 引入类语法

   ```bash
   yarn add vue-property-decorator vue-class-component
   ```

- 创建 ts 支持文件
  - 根目录创建`tsconfig.json`

    ```json
    {
        "compilerOptions": {
            "target": "es2015",
            "module": "esnext",
            "moduleResolution": "node",
            "experimentalDecorators": true
        },
        "include": [
            "src/**/*"
        ],
    }
    ```

  - src 下创建`vue-shim.d.ts`

    ```ts
    declare module "*.vue" {
        import Vue from "vue";
        export default Vue;
    }
    ```

  - `vue.config.js`文件中扩展 webpack 配置

    ```ts
    module.exports = {
      configureWebpack: {
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              loader: "ts-loader",
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
      },
    }
    ```

## vite 支持

- 引入 lodash

   ```bash
   yarn add @originjs/vite-plugin-require-context --dev
   ```

- `vite.config.js`中添加

   ```js
   import ViteRequireContext from '@originjs/vite-plugin-require-context'

  export default {
    plugins: [
        ViteRequireContext(),
    ]
  }
   ```
