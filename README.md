
# 笔试题

该项目通过 `create-react-app` 脚手架生成,可以fork当前项目或者通过 `create-react-app my-app --scripts-version=mxcins-react-scripts` 生成基础项目结构.

实现功能要求区分功能及模块commit代码, 完成之后将仓库地址发送到 mxcins@gmail.com



### 要求

#####  完成关于用户信息的CURD页面

用户信息数据字段: id, name, email

*  列表页   table列表 展示所有用户信息(可编辑更新， 删除)
*  详情页   展示单个用户信息（可编辑更新, 删除)
*  新建页   新建一个用户,创建成功跳转到详情页面
*  显示请求返回信息，动态更新页面数据

######  字段验证
name: { type: 'string', max-length: 50, required }

email: { type: 'email', max-length: 100, required }

### 接口
*  host: https://www.mxcins.com
*  list : GET /api/users
*  create: POST /api/users
*  update: PUT /api/users/:id
*  destroy: DELETE /api/users/:id


##### 其他

可以使用第三方库

any question: mxcins@gmail.com
