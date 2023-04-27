function addCard() {
  return {
    type: "ADD-CARD",
    payload: infoOnCard,
  };
}
function remove(Card) {
  return {
    type: "REMOVE",
    payload: Card,
  };
}
function displayCard(Card) {
  return {
    type: "DISPLAY-CARD",
    payload: Card,
  };
}
function putAwayCard(displayCard) {
  return {
    type: "PUT-AWAY-CARD",
    payload: displayCard,
  };
}

export { addCard, remove, displayCard, putAwayCard };
