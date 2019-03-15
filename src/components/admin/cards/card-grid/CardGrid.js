import React from 'react'
import {Card} from '../card'

import './card-grid.scss'

const CardGrid = ({cards, deleteCardOnClick}) => (
  <ul className="card-grid">
    {cards.map(card => 
      <Card 
        key={card.id} 
        card={card}
        deleteOnClick={() => deleteCardOnClick(card.id)}
      />
    )}
  </ul>
)

export default CardGrid
