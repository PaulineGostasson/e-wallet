const initialState = {
  cards: JSON.parse(localStorage.getItem("cards")) || [],
  ShowCard: JSON.parse(localStorage.getItem("showCards")) || {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-CARD":
      let everyCard = [...state.cards, action.payload];
      localStorage.setItem("cards", JSON.stringify(everyCard));
      return {
        ...state,
        cards: everyCard,
      };

    case "REMOVE":
      let myCards = JSON.parse(localStorage.getItem("cards"));
      let removeMyCard = myCards.findIndex(
        (card) => card.id === action.payload
      );
      const newRemove = [...myCards];
      newRemove.splice(removeMyCard, 1);
      localStorage.setItem("cards", JSON.stringify(newRemove));

      let removeCard = state.cards.findIndex(
        (card) => card.id === action.payload
      );
      const newCard = [...state.cards];
      newCard.splice(removeCard, 1);

      return {
        ...state,
        cards: newCard,
      };
    case "SHOW-CARD":
      let showDelete = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      localStorage.removeItem("showCards");

      if (showDelete > -1) {
        localStorage.setItem("showCards", JSON.stringify(action.payload));

        return {
          ...state,
          ShowCard: action.payload,
        };
      }
    case "REMOVE-SHOW-CARD":
      localStorage.removeItem("showCards");
      return {
        ...state,
        ShowCard: {},
      };

    default:
      return state;
  }
};

export default reducer;
