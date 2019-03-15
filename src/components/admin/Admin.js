import React from 'react'
import { Route } from 'react-router-dom'
import {FilteredCardGrid} from 'src/containers/cards'

const Admin = ({}) => (
  <div>
    <h2>Admin</h2>
    <Route exact path="/admin/cards" component={FilteredCardGrid} />
  </div>
)

export default Admin
