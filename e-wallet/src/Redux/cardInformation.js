const initialState = {
  cards: JSON.parse(localStorage.getItem("cards")) || [],
  ShowCard: JSON.parse(localStorage.getItem("lastSelectedCard")) || {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-CARD":
      const everyCard = [...state.cards, action.payload];
      localStorage.setItem("cards", JSON.stringify(everyCard));
      return {
        ...state,
        cards: everyCard,
      };

    case "RESET-CARDS":
      localStorage.removeItem("lastSelectedCard");
      localStorage.removeItem("cards");
      return {
        ...initialState,
      };

    case "REMOVE": {
      const updatedCards = state.cards.filter(
        (card) => card.id !== action.payload
      );
      localStorage.setItem("cards", JSON.stringify(updatedCards));
      return {
        ...state,
        cards: updatedCards,
      };
    }

    case "DISPLAY-CARD":
      const selectedCard = action.payload;
      const cardStack = state.cards.filter(
        (card) => card.id !== selectedCard.id
      );
      localStorage.setItem("lastSelectedCard", JSON.stringify(selectedCard));
      return {
        ...state,
        ShowCard: selectedCard,
        cards: cardStack,
      };

    case "PUT-AWAY-CARD":
      const lastSelectedCard = JSON.parse(
        localStorage.getItem("lastSelectedCard")
      );
      const cards = [...state.cards];
      const newStack = cards.filter((card) => card.id !== lastSelectedCard.id);

      localStorage.removeItem("lastSelectedCard");
      return {
        ...state,
        ShowCard: {},
        cards: [...newStack, lastSelectedCard],
      };

    default:
      return state;
  }
};

export default reducer;
