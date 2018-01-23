export default (state = 'hangman', action) => {
  switch (action.type) {
    case 'NEW_WORD':
      return action.word;
    default:
      return state;
  }
}
