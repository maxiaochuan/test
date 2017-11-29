import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as action from '../../store/action/users'
class Edit extends Component{
  constructor(){
    super();
    this.state= {
      email: '',
      name: ''
    }
  }
  componentDidMount(){
    let id=this.props.match.params.id;
    this.props.getOneUser(id);
    //改变初始的state
    let email=this.props.user.email;
    let name=this.props.user.name;
    this.setState({
      email,
      name
    })
  }
  handleChangeEmail=(e)=>{
    this.setState({
      email:e.target.value,
    })
  }
  handleChangeName=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  handleChangeClick=()=>{
    // console.log(this.state);
    let id=this.props.match.params.id;
    let user={
      email:this.state.email,
      name:this.state.name
    }
    this.props.updateUser(id,user);
    this.props.history.push('/list')
  }

  render(){
    let {user}=this.props;
    return(
        <div>
          <div className="form-group" >
            <label htmlFor="email" className="control-label">邮箱</label>
            <input
                onChange={this.handleChangeEmail}
                value={this.state.email}
                required id="email" type="email" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="username" className="control-label">用户名</label>
            <input
                onChange={this.handleChangeName}
                value={this.state.name}
                required id="username" type="text" className="form-control"/>
          </div>
          <div className="form-group pull-right">
            <button className="btn btn-success" onClick={this.handleChangeClick}>确认</button>
            <button className="btn btn-primary" onClick={()=>this.props.history.goBack()}>返回</button>
          </div>
        </div>
    )
  }
}
export default connect(
    state=>({...state.users}),
    action
)(Edit)