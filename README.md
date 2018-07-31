react-antd 一套后台管理模板 v1.0.0

## 项目结构

```javascript
+-- build/                                  ---打包后的文件目录
+-- config/                                 ---npm run eject 后的配置文件目录
+-- node_modules/                           ---npm下载文件目录
+-- public/
|   --- assets                --- 静态资源
|   --- index.html							---首页入口html文件
|   --- npm.json							---echarts测试数据
|   --- weibo.json							---echarts测试数据
|
+-- script/
|   --- build.js                           ---项目打包配置  
|   --- start.js                           ---项目启动配置
|   --- test.js                            ---项目测试配置
|
+-- src/                                    ---核心代码目录
|   +-- axios                               ---http请求存放目录
|   |    --- index.js
|   +-- components                          ---各式各样的组件存放目录
|   |    +-- Header                         ---Header组件
|   |    |    --- ...
|   |    +-- Footer                         ---底部组件
|   |    |    --- ...
|   |    +-- NavLeft                        ---左侧侧边栏组件
|   |    
|   +-- config                              ---公用配置
|   |    
|   |
|   +-- pages                               ---页面
|   |    +-- ui                             ---UI组件
|   |    +-- login                          ---登录组件
|   |    +-- home                           ---首页组件
|   |    +-- nomatch                        ---404页面
|   |    +-- table                          ---tab表单
|   |    +-- form                           ---表单组件
|   |    |   
|   +-- redux                               ---redux状态管理文件
|   +-- router                              ---项目路由配置文件
|   --- style                               ---组件公共样式文件
|   --- util                                ---项目公共机制配置
--- .env                                    ---启动项目自定义端口配置文件
--- .eslintrc                               ---自定义eslint配置文件，包括增加的react jsx语法限制
--- package.json

```


## 项目地址
  https://github.com/gmw-zjw/react-admin

## 下载
  git conle https://github.com/gmw-zjw/react-admin

## 安装配置
  cd react-damin && yarn 

## 启动
  yarn start      



### 后续功能还在添加中
