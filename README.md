# UNTITLED

## 项目结构

本项目使用`tarojs` + `react`开发，通过`redux`进行全局状态管理。`scss`作为css预处理器，`vant`作为组件库。需要的基础知识包括：

- `javascript`基础知识：了解`es6`语法，`promise`，`async/await`等
- `react`基础知识：了解类组件/函数组件，生命周期，`jsx`等
- 小程序的基本知识
- 状态管理方案，例如`redux`，`mobx`等
- `scss`基础知识

运行本项目建议使用`yarn`，如果使用`npm`，请自行替换命令。

## 项目运行

```bash
# 安装依赖
yarn

# 启动微信小程序开发环境
yarn dev:weapp

# 启动H5开发环境
yarn dev:h5
```

> 大部分组件都是跨平台的，但是也有部分组件只能在微信小程序中使用，例如`map`组件，`video`组件等。如果需要在H5中使用，请自行查阅文档。可以在开发时使用H5开发环境，这样便于使用浏览器的开发者工具进行调试。

## TO-DO

- [ ] 对接视觉要求，画完示例UI
- [ ] 迁移到函数组件
- [ ] 迁移到typescript
- [ ] 补全图标
- [ ] 整理全局状态
- [ ] 整理全局样式
- [ ] 处理api请求

## 必看

学习一晚上感觉taro和react都没那么难，至少写这个玩意儿还是很简单的。核心状态无非就是用户以及预约的情况，全部交给redux即可，这方面可以参考Flutter的provider，但是redux其实要复杂一些。

现在类组件和函数组件还是混用的，所以比较迫切的需要进行迁移，然后做ts的迁移，这样就可以开始写业务代码。至于一些优化就是后话了。

我现在能想到的注意点有这些：

1. 网络请求。目前的想法是在UI层处理网络，便于获取请求状态来变更UI，将拿到的数据写入状态后通过redux触发渲染即可。
2. 地图上一些点的展示。需要传入参数绘制，不难。
3. 泊友圈啥的，可以先当朋友圈写写，问题不大。
