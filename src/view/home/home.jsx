import React from 'react'
// import PropTypes from 'prop-types'
import * as axios from '../../api'
import { Link } from 'react-router-dom'
class HomeView extends React.Component {
  constructor(props) {
    super(...arguments)
    this.state = {
      list: [],
      name: '',
      email: '',
    }
  }

  async AxiosList(){
      try {
          this.setState({
            list: await axios.AxiosIndexList()
          })
      } catch (err) {
          console.log(err);
      }
  }

  componentDidMount() {
    this.AxiosList()
  }

  removeUser(index){
    const { list } = this.state;
    axios.AxiosDeleteUser(list[index].id)
    .then(res =>{
      if(res.message === 'delete success.'){
        list.splice(index,1)
        this.setState({
          list: list
        })
      }
    })
  }

  updateuser(index){
    const { list, name, email } = this.state;
    if(name && email){
      if((/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email))){
        axios.AxiosUpdateUser(list[index].id,{
          name:name,
          email:email,
        })
        .then(res =>{
          alert('修改成功')
          if(res.message == 'update success.'){
            this.AxiosList()
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
    const { list } = this.state
    return (
      <div>
        <div>
          <Link to={{
                  pathname: `/create`,
              }}>
              新建用户
          </Link>
        </div>
        <div>
          name:<input type="text"  onChange={ (e) =>this.handleChangeName(e) } value={this.state.name}/>
          email:<input type="email" onChange={ (e) =>this.handleChangeEmail(e) } value={this.state.email}/>
        </div>
        <ul>
          {
            list && list.map((v,index) =>(
              <li key={index}>
                  <div>id: {v.id}</div>
                  <div>
                    <Link  to={{
                            pathname: `/user/${v.id}`,
                        }}>
                        name: <span>{v.name}</span>
                    </Link>
                  </div> 
                  <div>email: <span>{v.email}</span></div>
                  <div>
                    <span onClick={() => this.removeUser(index) }>删除 </span>  
                    <span onClick={() => this.updateuser(index) }>更新</span>
                  </div>
              </li>
            ))
          }
        </ul>
        
      </div>
    )
  }
}

export default HomeView
