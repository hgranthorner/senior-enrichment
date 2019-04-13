import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Students, Home, Nav } from './components'

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path={'/'} exact render={() => <Redirect to="/home" />} />
        <Route path={'/home'} exact component={ Home } />
        <Route path={'/students'} exact component={ Students } />
      </Switch>

    </Router>
  )
}

export default App
