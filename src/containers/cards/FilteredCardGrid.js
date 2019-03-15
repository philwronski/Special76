import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CardGrid } from 'src/components/admin/cards/card-grid'
import { deleteCard, fetchCardsIdNeeded } from 'src/actions/cards'

class FilteredCardGrid extends Component {

  componentDidMount() {
    const { fetchCards } = this.props
    fetchCards()
  }

  render() {
    const { cards, deleteCardOnClick, isLoading } = this.props

    return (
      <>
        {isLoading && <p>Loading</p>}
        <CardGrid cards={cards} deleteCardOnClick={deleteCardOnClick} />
      </>
    )
  }

}

const mapStateToProps = state => ({
  cards: state.cards.items,
  isLoading: state.cards.isLoading
})

const mapDispatchToProps = dispatch => ({
  deleteCardOnClick: id => dispatch(deleteCard(id)),
  fetchCards: () => dispatch(fetchCardsIdNeeded())
})

export default connect(mapStateToProps, mapDispatchToProps)(FilteredCardGrid)