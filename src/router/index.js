import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from '../views/home/home'
import About from '../views/about/about'
import Detail from '../views/detail/detail'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/detail" component={Detail}></Route>
    </Switch>
  </HashRouter>
)

export default BasicRoute