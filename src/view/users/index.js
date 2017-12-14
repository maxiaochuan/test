import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as axios from '../../api'
const userinfo = null

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo:{},
      name: '',
      email: '',
    }
  }
  
  componentWillMount(props){
    const { id } = this.props.match.params
    axios.AxiosIndexList()
    .then(res =>{
      res.map(v =>{
        if(v.id == id){
          this.setState({
            userinfo : v
          })
        }
      })
    })
  }
  
  removeUser(props){
    const { userinfo } = this.state;
    const { history } = this.props
    axios.AxiosDeleteUser(userinfo.id)
    .then(res =>{
      if(res.message === 'delete success.'){
        history.push('/')
      }
    })
  }

  updateuser(){
    const { userinfo, name, email } = this.state;
    if(name && email){
      if((/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email))){
        axios.AxiosUpdateUser(userinfo.id,{
          name:name,
          email:email,
        })
        .then(res =>{
          alert('修改成功')
          if(res.message == 'update success.'){
            const { id } = this.props.match.params
            axios.AxiosIndexList()
            .then(res =>{
              res.map(v =>{
                if(v.id == id){
                  this.setState({
                    userinfo : v
                  })
                }
              })
            })
          }
        })
      }else{
        alert('邮箱验证不通过')
      }
    }else{
      alert('你没输入值')
    }
  }

  
  handleChangeName(e){
    if(e.target.value.length < 51){
      this.setState({
        name: e.target.value
      })
    }else{
      return
    }
  }

  handleChangeEmail(e){
    if(e.target.value.length < 101){
      this.setState({
        email: e.target.value
      });
    }else{
      return 
    }
  }

  render() {
    const { userinfo } = this.state
    return(
      <div className="User">
        <span onClick={() => this.removeUser() }>删除 </span>  
        <div>
          <p>id:{userinfo.id}</p>
          <p>name:{userinfo.name}</p>
          <p>email:{userinfo.email}</p>
        </div>
        <div>
          name:<input type="text"  onChange={ (e) =>this.handleChangeName(e) } value={this.state.name}/>
          email:<input type="email" onChange={ (e) =>this.handleChangeEmail(e) } value={this.state.email}/>
          <span onClick={() => this.updateuser() }>更新</span>
        </div>
      </div>
    )
  }
}

export default Topic;
