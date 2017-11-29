import HomeView from 'view/home'
import List from '../view/list'
import Detail from '../view/detail'
import Create from '../view/create'
import Edit from '../view/edit'

export default [
  {
    exact: true,
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    name:'list',
    path:'/list',
    component:List
  },{
    name:'detail',
    path:'/detail/:id',
    component:Detail
  },{
    name:'edit',
    path:'/edit/:id',
    component:Edit
  },
  {
    name:'create',
    path:'/create',
    component:Create
  }
]
