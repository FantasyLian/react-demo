import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../views/home/home'
import About from '../views/about/about'
import Detail from '../views/detail/detail'
import Login from '../views/login/login'
import Register from '../views/register/register'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/detail" component={Detail}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
    </Switch>
  </HashRouter>
)

export default BasicRoute