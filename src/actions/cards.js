import { createAction } from './utils'
import { getCards, saveCard as _saveCard } from 'src/api/cards'
import { findCards, isLoadingCard } from 'src/selectors/cards'
import { uuidv4 } from 'src/utils'

export const actionsTypes = {
  ADD_CARD: 'ADD_CARD',
  EDIT_CARD: 'EDIT_CARD',
  FILTER_CARD: 'FILTER_CARD',
  DELETE_CARD: 'DELETE_CARD',
  FETCH_CARDS: 'FETCH_CARDS',
  IS_LOADING_CARDS: 'IS_LOADING_CARDS',
  RECEIVE_CARDS: 'RECEIVE_CARDS'
}

const fetchCards = () => async (dispatch) => {
  dispatch(isLoadingCards(true))
  const cards = await getCards()
  if(cards) {
    await dispatch(reveiveCards(cards))
    dispatch(isLoadingCards(false))
  }
}

const shouldFetchCards = (state) => {
  const items = findCards(state)
  if (!items || items.length == 0) {
    return true
  } else if (isLoadingCard(state)) {
    return false
  } else {
    return false
  }
}

export const fetchCardsIdNeeded = () => async (dispatch, getState) => {
  if(shouldFetchCards(getState())) {
    return dispatch(fetchCards())
  } else {
    return Promise.resolve()
  }
}

export const saveCard = (card, refresh) => async (dispatch) => {
  card['id'] = uuidv4()
  await dispatch(addCard(card))
  await _saveCard(card)
  if(refresh) {
    dispatch(fetchCards())
  }
}

export const addCard = createAction(actionsTypes.ADD_CARD, 'card')
export const filterCard = createAction(actionsTypes.FILTER_CARD, 'filter')
export const editCard = createAction(actionsTypes.EDIT_CARD, 'card')
export const deleteCard = createAction(actionsTypes.DELETE_CARD, 'id')
export const isLoadingCards = createAction(actionsTypes.IS_LOADING_CARDS, 'isLoading')
export const reveiveCards = createAction(actionsTypes.RECEIVE_CARDS, 'cards')
