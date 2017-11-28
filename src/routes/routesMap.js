import HomeView from 'view/home'
import UserInfo from 'view/users'

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
    path: '/:id',
    component: UserInfo,
  }
]
