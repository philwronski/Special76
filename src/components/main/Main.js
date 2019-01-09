import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Admin } from 'src/components/admin'
import { Home } from 'src/components/home'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} />
    </Switch>
  </main>
)

export default Main
