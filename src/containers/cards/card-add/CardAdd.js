import React, {Component} from 'react'
import {Input} from 'src/components/commons'

const DEFAULT_CARD = {
  special: null,
  title: '',
  description: '',
  level: 1,
  rank: {
    current: 1,
    ranks: []
  },
  rarity: 'COMMON',
  advice: ''
}

class CardAdd extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newCard : DEFAULT_CARD
    }


    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleClearForm(e) {
    e.preventDefault()
    this.setState({
      newCard : DEFAULT_CARD
    })
  }

  handleFormSubmit(e) {

  }

  render() {

    const {newCard} = this.state

    return (
      <form
        onSubmit={handleFormSubmit}>
        <Input
          inputType='text'
          name='title'
          title='Titre'
          value={newCard.title}
          placeholder='Entrez le titre de la carte'
          handleChange={}
      </form>
    )
  }
}

export default CardAdd
