import { createSelector } from 'reselect';

const lettersStatusSelector = state => state.lettersStatus;
const currentWordSelector = state => state.currentWord;

export default createSelector(
  [lettersStatusSelector, currentWordSelector],
  (lettersStatus, currentWord) => currentWord
    .split('')
    .map(x => lettersStatus[x] ? x : '_')
    .join('')
);
