import { createReducer } from './utils'
import { actionsTypes } from 'src/actions/cards'

const initialState = {
  isLoading: false,
  items: []
}

const addCard = (state, action) => {
  const { items } = state
  return {
    ...state,
    items : [...items, action.card]
  }
}

const deleteCard = (state, action) => {
  const { items } = state
  return {
    ...state,
    items : items.filter(card => card.id !== action.id)
  }
}

const receiveCards = (state, action) => {
  const { items } = state
  return {
    ...state,
    items: items.concat(action.cards)
  }
}

const isLoading = (state, action) => ({
  ...state,
  isLoading: action.isLoading
})

const cards = createReducer(initialState, {
  [actionsTypes.ADD_CARD]: addCard,
  [actionsTypes.DELETE_CARD]: deleteCard,
  [actionsTypes.RECEIVE_CARDS]: receiveCards,
  [actionsTypes.IS_LOADING_CARDS]: isLoading,
})

export default cards