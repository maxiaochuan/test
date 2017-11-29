import * as Types from '../actionTypes'
import { push } from 'react-router-redux'
const url = "https://www.mxcins.com";

//获取所有用户
export const getUser = () => (dispatch) => {
  fetch(url + '/api/users', {method: 'GET'})
      .then(res => res.json())
      .then(userList => {
    dispatch({
      type: Types.GET_USERS,
      userList
    })
  })
}

//获取一个用户
export const getOneUser=(id)=>(dispatch)=>{
  let userId=id;
  fetch(url + `/api/users?${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res =>res.json())
      .then(data=>{
        dispatch({
          type:Types.GET_ONE_USER,
          userId,
          data
        })
      })
}


//新增用户
export const addUser = (user) => (dispatch) => {
  fetch(url + '/api/users',
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then(res => res.json()).then(data => {
    if (data.message === 'create success.') {
      let id = data.id;
      user.id = id;
      dispatch({
        type: Types.ADD_USER,
        user
      })
      debugger
      dispatch(push(`/detail/${id}`))
      debugger
    } else {
      alert('添加失败,输入的格式有误')
    }
  })
}

//删除用户
export const delUser = (id) => (dispatch) => {
  let userId=id;
  fetch(url + `/api/users/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: userId
  }).then(res => res.json()).then(data=>{
    // message:"delete success."
    if(data.message==='delete success.'){
      dispatch({
        type:Types.DELETE_USER,
        userId
      })
      alert('delete success.')
    }else {
      alert('删除失败')
    }
  })
};

//修改用户
export const updateUser=(id,user)=>(dispatch)=>{
  let uId=id;
  fetch(url+`/api/users/${uId}`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },
    body:JSON.stringify(user)
  }).then(res=>res.json())
      .then(data=>{
        //update success.
        if(data.message==='update success.'){
          dispatch({
            type:Types.UPDATE_USER,
            user:{
              email:data.email,
              name:data.name,
              id:data.id
            }
          })
          alert('update success.')
        }
      })


}


// ### 接口
// *  host: https://www.mxcins.com
// *  list : GET /api/users
// *  create: POST /api/users
// *  update: PUT /api/users/:id
// *  destroy: DELETE /api/users/:id