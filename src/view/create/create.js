import React,{Component} from 'react';
import PropTypes from 'prop-types'
import * as action from '../../store/action/users'
import {connect} from 'react-redux'
class Create extends Component{
  // static propTypes = {
  //   name: PropTypes.string.isRequired,
  //   email: PropTypes.string.isRequired,
  // }
  // name: { type: 'string', max-length: 50, required }
  // email: { type: 'email', max-length: 100, required }
  constructor(){
    super();
    this.state={

    }
  }
  handleSubmit=(event)=>{
    event.preventDefault();
    let email=this.refs.email.value;
    let name=this.refs.username.value;
    this.props.addUser({name,email})
    // this.props.history.push('./detail')
  }
  render(){
    return(
        <div>
          <form onSubmit={this.handleSubmit} method="POST" >
            <div className="form-group">
              <label htmlFor="email" className="control-label">邮箱</label>
              <input
                  ref="email"
                  required id="email" type="email" className="form-control" maxLength={100} />
            </div>
            <div className="form-group">
              <label htmlFor="username" className="control-label">用户名</label>
              <input
                  ref="username"
                  maxLength={50}
                  required id="username" type="text" className="form-control"
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-info"/>
            </div>
          </form>
        </div>
    )
  }
}
export default connect(
    state=>({...state}),
    action
)(Create)