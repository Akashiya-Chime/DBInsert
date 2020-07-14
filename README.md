# DBInsert

## 开发依赖

- 阿里云服务器
- MongoDB 数据库
- Nodejs

## 开发思路

### 服务器搭建

Nodejs 结合 express 框架

### 数据搭建

使用 MongoDB 搭建数据结构

简化储存校验，校验放给前端页面处理
（如果要使用数据库校验，可使用自定义验证器[validate](http://www.mongoosejs.net/docs/validation.html#自定义验证器)，通过传入自建函数来实现校验）

数据库结构：

- dnd
  + weapons
  + armor
  + …

### 前端页面搭建

- 首页：
  各录入页面入口
  登录：指定用户登录
- 各录入页：
  数据提交
  已录入数据查看
- 使用Ajax发送数据