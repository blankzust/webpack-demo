# webpack源码查阅

源码要带着目的去查阅，故在此列出6个目的：
- Webpack CLI 启动打包流程；
- 载入 Webpack 核心模块，创建 Compiler 对象；
- 使用 Compiler 对象开始编译整个项目；
- 从入口文件开始，解析模块依赖，形成依赖关系树；
- 递归依赖树，将每个模块交给对应的 Loader 处理；
- 合并 Loader 处理完的结果，将打包结果输出到 dist 目录。

## Webpack CLI 启动打包流程；

## Webpack Compiler的创建

- Question1: 从源码上来看可以传入option数组，进行多个独立编译进程的执行，如果通过webpack.config.js定义多个option？