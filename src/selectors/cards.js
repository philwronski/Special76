export const findCards = state => state.cards.items

export const isLoadingCard = state => state.cards.isLoading

export const findById = (state, id) => findCards(state).find(i => i.id == id)