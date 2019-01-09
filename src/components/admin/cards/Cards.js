import React from 'react'
import {Card} from './card'
import {CardGrid} from './card-grid'
import {CardAdd} from 'src/containers/cards'

const Cards = ({}) => (
  <>
    <h3>Gestion des cartes</h3>
    <CardAdd/>
    <CardGrid/>
  </>
)

export default Cards
