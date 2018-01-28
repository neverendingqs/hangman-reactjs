import randomWords from 'random-words';

export default (state = undefined, action) => {
  switch (action.type) {
    case 'NEW_GAME':
      return randomWords();
    default:
      return state || randomWords();
  }
};
