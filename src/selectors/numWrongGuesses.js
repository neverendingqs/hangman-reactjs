import { createSelector } from 'reselect';

import numLettersGuessedSelector from './numLettersGuessed';
const maxGuessesSelector = state => state.maxGuesses;

export default createSelector(
  [numLettersGuessedSelector, maxGuessesSelector],
  (numLettersGuessed, maxGuesses) => maxGuesses - numLettersGuessed
);
