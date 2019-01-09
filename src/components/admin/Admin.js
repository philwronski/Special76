import React from 'react'
import { Route } from 'react-router-dom'
import {Cards} from './cards'

const Admin = ({}) => (
  <div>
    <h2>Admin</h2>
    <Route exact path="/admin/cards" component={Cards} />
  </div>
)

export default Admin
