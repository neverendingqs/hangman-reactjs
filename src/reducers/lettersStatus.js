export default (state = {}, action) => {
  switch (action.type) {
    case 'LETTER_INPUT':
      return Object.assign({}, state, { [action.letter]: true });
    default:
      return state;
  }
}
