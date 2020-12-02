# 数据报表项目指南<!-- {docsify-ignore-all} -->
## [项目创建![跳转](../_images/share.svg ':size=20')](report/001.md) 
* 安装 vue-cli
* 初始化项目
* 安装 vue-router
* 安装 element-ui

> 技术选型：   
> reprot项目使用的是vue 2.0 因为使用的element-ui echarts 插件还是基于vue2.0
> > `node -v` 查看node版本    
> > `npm -v`查看npm版本    
> > 通过npm安装cnpm或者在安装过程中带上淘宝镜像    
> > `npm install -g cnpm --registry=https://registry.npm.taobao.org`
>
> vue 安装命令：`cnpm i -g @vue/cli`   
> 如果已经安装过会进行更新。     
>查看版本 ： `vue -V`    
> 创建项目：`vue create 项目名 --registry=https://registry.npm.taobao.org` 
> 多选时，空格选择/取消，Enter确认
> 安装element： `vue add element --registry=https://registry.npm.taobao.org` 中间选择按需引入、中文
> 安装 echarts: `cnpm i -S echarts` 安装时需要使用 -S安装到dependencies    
> 在main.js中将echarts可以引入到原型链上，方便后面使用    
> > import Echarts from 'echarts'   
> > Vue.prototype.$echsrts = Echarts

## 静态页面开发阶段
* 核心指标
* 销售业绩
* 区域排名
* 分类排名

##  
