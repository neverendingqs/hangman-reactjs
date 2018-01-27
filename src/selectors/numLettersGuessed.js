import { createSelector } from 'reselect';

const lettersStatusSelector = state => state.lettersStatus;
const currentWordSelector = state => state.currentWord;

export default createSelector(
  [lettersStatusSelector, currentWordSelector],
  (lettersStatus, currentWord) => Object
    .keys(lettersStatus)
    .filter(key => lettersStatus[key])
    .reduce(
      (acc, letter) => currentWord.includes(letter)
        ? acc
        : acc + 1,
      0
    )
);
