
# 面试题


### 要求

在项目基础上实现以下功能

#####  完成关于用户信息的CURD页面

*  列表页   table列表 展示  id， name， email (可编辑更新， 删除)
*  详情页   展示 单个用户的信息（可编辑更新, 删除)
*  新建页   新建一个用户
*  显示请求返回信息，动态更新页面数据

######  字段验证
name: { type: 'string', max-length: 50, required }

email: { type: 'email', max-length: 100, required }

##### 接口
*  host: https://www.mxcins.com
*  list : GET /api/users
*  create: /api/users
*  update: /api/users/:id
*  destroy: DELETE /api/users/:id


##### 其他

可以使用第三方库

any question: mxcins@mail.com 
