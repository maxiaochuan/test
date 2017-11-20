
# 笔试题

请fork本项目到自己的仓库中,并在此基础上进行开发

按要求实现功能,并分阶段提交commit

### 功能要求

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
