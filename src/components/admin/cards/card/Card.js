import React from 'react'
import { Link } from 'react-router-dom'

import './card.scss'

const Card = ({card, deleteOnClick}) => (
  <li className="tool-card card">
  <div className="card-media">
    <img src="https://image.shutterstock.com/z/stock-photo-software-developer-programming-code-abstract-computer-script-code-programming-code-screen-of-531885736.jpg"/>
  </div>
  <div className="card-content">
    <h3>{card.title}</h3>
    <p>{card.description}</p>
  </div>
  <div className="card-actions">
  <button onClick={deleteOnClick}>Delete</button>
  <Link to={`cards/${card.id}`}>Détails</Link>
  </div>
</li>
)

export default Card
