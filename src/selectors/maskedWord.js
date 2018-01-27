import { createSelector } from 'reselect';

const isForfeitedSelector = state => state.isForfeited;
const lettersStatusSelector = state => state.lettersStatus;
const currentWordSelector = state => state.currentWord;

export default createSelector(
  [isForfeitedSelector, lettersStatusSelector, currentWordSelector],
  (isForfeited, lettersStatus, currentWord) => isForfeited
    ? currentWord
    : currentWord
      .split('')
      .map(x => lettersStatus[x] ? x : '_')
      .join('')
);
