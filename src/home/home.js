import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import '../home/home.less'

export default function BaseExample () {
  return (
    <Router>
      <div className="container">
        <ul className="nav-bar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <section className="page-wrap">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  )
}

function Home () {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About () {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function Dashboard () {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}