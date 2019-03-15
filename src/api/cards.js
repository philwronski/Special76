export const getCards = async () => {
  const stateCards = JSON.parse(localStorage.getItem('cards'))
  if(stateCards) {
    return stateCards.items
  }
  return []
}

export const saveCard = async (card) => {
  let stateCards = JSON.parse(localStorage.getItem('cards'))
  console.log(stateCards)
  if(stateCards) {
    stateCards.items = [...stateCards.items, card]
  } else {
    stateCards = {
      items: [card]
    }
  }

  localStorage.setItem('cards', JSON.stringify(stateCards))

  return card;
}

export const deleteCard = async (id) => {
  let stateCards = JSON.parse(localStorage.getItem('cards'))
  stateCards.items = stateCards.items.filter(card => card.id !== id)
  localStorage.setItem('cards', JSON.stringify(stateCards))
}