import React from 'react'
import { Route,Switch } from 'react-router-dom'

export default routes => routes.map((route, i) => <Switch>
  <Route key={i} { ...route }></Route>
</Switch>)
