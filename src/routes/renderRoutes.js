import React from 'react'
import { Route } from 'react-router-dom'

export default routes => routes.map((route, i) => <Route key={i} { ...route }></Route>)
