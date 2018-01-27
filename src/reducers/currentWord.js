export default (state = 'hangman', action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return 'hangman'; // TODO
    default:
      return state;
  }
};
