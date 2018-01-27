import { createSelector } from 'reselect';

import maskedWordSelector from './maskedWord';
import numGuessesRemainingSelector from './numGuessesRemaining';
const isForfeitedSelector = state => state.isForfeited;

export default createSelector(
  [maskedWordSelector, numGuessesRemainingSelector, isForfeitedSelector],
  (maskedWord, numGuessesRemaining, isForfeited) => !maskedWord.includes('_')
    || numGuessesRemaining == 0
    || isForfeited
);
