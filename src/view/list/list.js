import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as action from '../../store/action/users'
class List extends Component {
  constructor(){
    super();
    this.state={
      editing:false
    }
  }
  componentDidMount() {
    console.log(this.props);
    this.props.getUser()
  }
  handleDelete=(id)=>{
    this.props.delUser(id);
  }
  render() {
    let {userList} = this.props;
    return (
        <div className="container">
          <div className="row">
            <ul className="col-sm-12 list-group">
              <li className="list-group-item row">
                <div className="col-sm-8">
                  <span className="col-sm-4">ID</span>
                  <span className="col-sm-4">Email</span>
                  <span className="col-sm-4">Name</span>
                </div>
                <div className="col-sm-4">
                  <span className="col-sm-4 text-center">操作</span>
                </div>
              </li>
            </ul>
            {
              userList.length > 0
                  ? <ul className="col-sm-12 list-group">
                {
                  userList.map((user, index) => (
                        <li className="list-group-item row" key={user.id}>
                          <div className="col-sm-8">
                            <Link to={`/detail/${user.id}`} onClick={()=>{this.props.getOneUser(user.id)}}>
                              <span className="col-sm-4">{user.id}</span>
                              <span className="col-sm-4">{user.email}</span>
                              <span className="col-sm-4">{user.name}</span>
                            </Link>
                          </div>
                          <div className="col-sm-4">
                            <Link
                                className="col-sm-4 btn btn-primary pull-left"
                                to={`/edit/${user.id}`}
                            >修改</Link>
                            <button
                                className="col-sm-4 btn btn-danger pull-right"
                                onClick={()=>this.handleDelete(user.id)}
                            >删除</button>
                          </div>
                        </li>
                  ))
                }
              </ul>
                  : <div>加载中</div>
            }
          </div>
        </div>
    )
  }
}

export default connect(
    state => ({...state.users}),
    action
)(List)