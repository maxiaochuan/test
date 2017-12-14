import React,  {Component } from 'react'
// import PropTypes from 'prop-types'
import * as axios from '../../api'
import { Link } from 'react-router-dom'

class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '',
    }
  }

  createuser(props){
    const { name, email } = this.state;
    const { history } = this.props
    if(name && email){
      if((/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email))){
        axios.AxiosCreateUser({
          name:name,
          email:email,
        })
        .then(res =>{
          if(res.message == 'create success.'){
            history.push(`/user/${res.id}`)
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

  render () {
    return (
      <div className='CreateUser'>
          name:<input type="text"  onChange={ (e) =>this.handleChangeName(e) } value={this.state.name}/>
          email:<input type="email" onChange={ (e) =>this.handleChangeEmail(e) } value={this.state.email}/>
          <span onClick={() => this.createuser() }>创建</span>

      </div>
    )
  }
}

export default CreateUser
