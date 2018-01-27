export default (state = {}, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return {};
    case 'LETTER_INPUT':
      return Object.assign({}, state, { [action.letter]: true });
    default:
      return state;
  }
};
