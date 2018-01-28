import { createSelector } from 'reselect';

import hasUserWonSelector from './hasUserWon';
import numGuessesRemainingSelector from './numGuessesRemaining';
const isForfeitedSelector = state => state.isForfeited;

export default createSelector(
  [hasUserWonSelector, numGuessesRemainingSelector, isForfeitedSelector],
  (hasUserWon, numGuessesRemaining, isForfeited) =>
    hasUserWon || numGuessesRemaining == 0 || isForfeited
);
