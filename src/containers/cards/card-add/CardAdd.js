import React, {Component} from 'react'
import {Input, TextArea, Button, Select} from 'src/components/commons'
import { connect } from 'react-redux'
import {SELECTABLE_SPECIALS} from 'src/constants/specials'
import {RARITY} from 'src/constants/rarity'

const DEFAULT_CARD = {
  special: "",
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

    this.state = DEFAULT_CARD

    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleFieldChange(e) {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleClearForm(e) {
    e.preventDefault()
    this.clearForm()
  }

  clearForm() {
    this.setState(DEFAULT_CARD)
  }

  handleFormSubmit(e) {
    e.preventDefault()
    // if (!title.value.trim() || !description.value.trim()) {
    //   return
    // }
    console.log(this.state)
    // dispatch(saveTool({title: title.value, description: description.value}, false))
  }

  render() {

    const {special, title, description, level, rarity, advice} = this.state

    return (
      <form
        onSubmit={this.handleFormSubmit}
        onReset={this.handleClearForm}>
        <Select
          name="special"
          title="Special"
          value={special}
          options={SELECTABLE_SPECIALS}
          onChange={this.handleFieldChange}/>
        <Input
          type='text'
          name='title'
          title='Titre'
          value={title}
          placeholder='Titre de la carte'
          onChange={this.handleFieldChange} />
        <TextArea
          name='description'
          title='Description'
          value={description}
          placeholder='Description de la carte'
          onChange={this.handleFieldChange} />
        <Input
          type='number'
          name='level'
          title='Niveau'
          value={level}
          placeholder='Niveau minimum pour acquérir la carte'
          onChange={this.handleFieldChange} />
        <Select
          name="rarity"
          title="Rareté"
          value={rarity}
          options={RARITY}
          onChange={this.handleFieldChange}/>
        <TextArea
          name='advice'
          title='Conseil'
          value={advice}
          placeholder="Conseil d'utilisation de la carte"
          onChange={this.handleFieldChange} />
        <Button
          name='enregister'
          title='Enregister'
          type='submit'>Enregister</Button>
        <Button
          name='reset'
          title='Reset'
          type='reset'>Reset</Button>
      </form>
    )
  }
}

export default connect()(CardAdd)
