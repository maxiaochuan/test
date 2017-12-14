import HomeView from 'view/home'
import UserInfo from 'view/users'
import CreateUser from 'view/createusers'
export default [
  {
    exact: true,
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    exact: false,
    name: 'user',
    path: '/user/:id',
    component: UserInfo,
  },
  {
    exact: false,
    name: 'create',
    path: '/create',
    component: CreateUser,
  },
]
