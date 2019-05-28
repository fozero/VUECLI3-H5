### VUECLI3-H5

> 基于vuecli3构建的一个快速开发h5 APP的模板，集成了高德地图、mint-ui，以及antv-f2可视化框架

### 项目结构
```
|--dist
|--node_modules
|--public
|--src
   |--api    //api请求
   |--assets  //资源文件
   |--commponents   //主键
   |--pages
        |--entry    //首页
        |--mine     //我的
        |--staticstics  //统计
        |--Login.vue   //登录
        |--Entrance.vue   //页面框架
   |--plugins
        |--axios.js   //http请求
   |--router
        |--index.js   //路由
   |--store     //vuex状态管理
        |--modules
        |--index.js
        |--mutation-types.js
        |--plugins.js
   |--style
   |--utils  
        |--commons.js   //公共方法
   |--App.vue
   |--bus.js    //事件总线
   |--filters.js   //过滤器
   |--main.js      
   |--mixin.js   //混合
|--tests
|--.browserslistrc
```


### 安装依赖
```
npm install
```

### 本地运行
```
npm run serve
```

### 编译构建
```
npm run build
```

### 测试
```
npm run test
```

### 代码检查
```
npm run lint
```

### 单元测试
```
npm run test:unit
```


### 截图

<figure class="third">
    <img src="https://raw.githubusercontent.com/fozero/VUECLI3-H5/master/public/screenshot/登录.png" width="200">
    <img src="https://raw.githubusercontent.com/fozero/VUECLI3-H5/master/public/screenshot/首页.png" width="200">
    <img src="https://raw.githubusercontent.com/fozero/VUECLI3-H5/master/public/screenshot/我的.png" width="200">
</figure>


### 相关资料
- 高德地图
[amap高德地图vue组件](https://elemefe.github.io/vue-amap/#/)
[高德原生](https://lbs.amap.com/api/javascript-api/summary)

- mint-ui框架
[mint-ui](http://mint-ui.github.io/#!/zh-cn)

- vue-cli3.x文档
[vue-cli3.x](https://cli.vuejs.org/zh/)

- antv-f2移动端可视化ui框架
[antv-f2](https://antv.alipay.com/zh-cn/f2/3.x/)


### 联系我
- fozero@126.com
- https://github.com/fozero
