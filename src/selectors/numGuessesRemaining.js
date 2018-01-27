import { createSelector } from 'reselect';

import numWrongGuessesSelector from './numWrongGuesses';
const maxGuessesSelector = state => state.maxGuesses;

export default createSelector(
  [numWrongGuessesSelector, maxGuessesSelector],
  (numWrongGuesses, maxGuesses) => maxGuesses - numWrongGuesses
);
