function addCard(Card) {
  return {
    type: "ADD-CARD",
    payload: Card,
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
function putAwayCard(Card) {
  return {
    type: "PUT-AWAY-CARD",
    payload: Card,
  };
}
function resetCards() {
  localStorage.removeItem("cards");
  localStorage.removeItem("lastSelectedCard");
  return {
    type: "RESET-CARDS",
  };
}

export { addCard, remove, displayCard, putAwayCard, resetCards };
