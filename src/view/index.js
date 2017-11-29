import React,{Component} from 'react';
import { NavLink} from 'react-router-dom'
export default class Root extends Component{
  render(){
    const activeStyle = {fontWeight: 'bold', color: 'white'}
    return(
        <div>
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-brand">
                户信息的CURD页面
              </div>
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to={'/'} exact={true} activeStyle={activeStyle}>首页</NavLink>
                </li>
                <li>
                  <NavLink to={'/list'} activeStyle={activeStyle}>列表</NavLink>
                </li>
                <li>
                  <NavLink to={'/create'} activeStyle={activeStyle}>新增</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
