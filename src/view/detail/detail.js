import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as action from '../../store/action/users'
class Detail extends Component{
  componentDidMount(){
    let id=this.props.match.params.id;
    this.props.getOneUser(id);
  }
  handleDelete=(id)=>{
    this.props.delUser(id);
    this.props.history.goBack()
  }
  render(){
    let {user}=this.props;
    return(
        <div>
          {
            user? <ul className="col-sm-12 list-group">
                    <li className="list-group-item row" key={user.id}>
                      <div className="col-sm-8">
                          <span className="col-sm-4">{user.id}</span>
                          <span className="col-sm-4">{user.email}</span>
                          <span className="col-sm-4">{user.name}</span>
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
            </ul>
                : <div>加载中</div>
          }
        </div>
    )
  }
}
export default connect(
    state=>({...state.users}),
    action
)(Detail)