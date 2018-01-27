export default (state = false, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return false;
    case 'FORFEIT_GAME':
      return true;
    default:
      return state;
  }
};
