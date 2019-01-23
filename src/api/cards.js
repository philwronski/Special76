export const getCards = async () => {
  const stateCards = JSON.parse(localStorage.getItem('cards'))
  if(stateCards) {
    return stateCards.items
  }
  return []
}

export const saveCard = async (card) => {
  const stateCards = JSON.parse(localStorage.getItem('cards'))
  if(stateCards) {
    stateCards.items = [...stateCards.items, card]
    localStorage.setItem('cards', JSON.stringify(stateCards))
  } else {
    throw new Error('saveCard - not working')
  }

  return card;
}
