import { createSelector } from 'reselect';

const hasUserForfeitedSelector = state => state.hasUserForfeited;
const lettersStatusSelector = state => state.lettersStatus;
const currentWordSelector = state => state.currentWord;

export default createSelector(
  [hasUserForfeitedSelector, lettersStatusSelector, currentWordSelector],
  (hasUserForfeited, lettersStatus, currentWord) => hasUserForfeited
    ? currentWord
    : currentWord
      .split('')
      .map(x => lettersStatus[x] ? x : '_')
      .join('')
);
